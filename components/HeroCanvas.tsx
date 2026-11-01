'use client'

import { useEffect, useRef } from 'react'

function roundSprite(THREE: typeof import('three')) {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')!
  const glow = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  glow.addColorStop(0, 'rgba(255,255,255,1)')
  glow.addColorStop(0.35, 'rgba(255,255,255,0.7)')
  glow.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(canvas)
}

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let frame = 0
    let destroyed = false
    let cleanup = () => {}

    ;(async () => {
      const THREE = await import('three')
      if (destroyed) return

      let renderer: import('three').WebGLRenderer
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      } catch {
        return // WebGL が使えない環境は CSS の背景のままにする
      }

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 200)
      camera.position.z = 8

      renderer.setSize(mount.clientWidth, mount.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      mount.appendChild(renderer.domElement)

      // 星
      const count = 2400
      const positions = new Float32Array(count * 3)
      const colors = new Float32Array(count * 3)
      const palette = [new THREE.Color('#ffffff'), new THREE.Color('#6ee7b7'), new THREE.Color('#a78bfa')]
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 60
        positions[i * 3 + 1] = (Math.random() - 0.5) * 40
        positions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 10
        const color = palette[Math.floor(Math.random() * palette.length)]
        colors.set([color.r, color.g, color.b], i * 3)
      }
      const starGeometry = new THREE.BufferGeometry()
      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      const sprite = roundSprite(THREE)
      const starMaterial = new THREE.PointsMaterial({
        size: 0.12,
        map: sprite,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
      })
      const stars = new THREE.Points(starGeometry, starMaterial)
      scene.add(stars)

      // 正十二面体
      const solidGeometry = new THREE.EdgesGeometry(new THREE.DodecahedronGeometry(2.6))
      const solidMaterial = new THREE.LineBasicMaterial({ color: '#6ee7b7', transparent: true, opacity: 0.55 })
      const solid = new THREE.LineSegments(solidGeometry, solidMaterial)
      solid.position.set(window.innerWidth > 1000 ? 3.6 : 0, 0.8, 0)
      scene.add(solid)

      const pointer = { x: 0, y: 0 }
      const onPointerMove = (e: PointerEvent) => {
        pointer.x = e.clientX / window.innerWidth - 0.5
        pointer.y = e.clientY / window.innerHeight - 0.5
      }
      const onResize = () => {
        camera.aspect = mount.clientWidth / mount.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(mount.clientWidth, mount.clientHeight)
      }
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      window.addEventListener('resize', onResize)

      const tick = () => {
        solid.rotation.x += 0.0012
        solid.rotation.y += 0.0018
        stars.rotation.y += 0.00015
        camera.position.x += (pointer.x * 0.8 - camera.position.x) * 0.03
        camera.position.y += (-pointer.y * 0.6 - camera.position.y) * 0.03
        camera.lookAt(0, 0, 0)
        renderer.render(scene, camera)
        frame = requestAnimationFrame(tick)
      }
      tick()

      cleanup = () => {
        cancelAnimationFrame(frame)
        window.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('resize', onResize)
        starGeometry.dispose()
        starMaterial.dispose()
        sprite.dispose()
        solidGeometry.dispose()
        solidMaterial.dispose()
        renderer.dispose()
        renderer.domElement.remove()
      }
    })()

    return () => {
      destroyed = true
      cleanup()
    }
  }, [])

  return <div ref={mountRef} className="hero__canvas" aria-hidden="true" />
}
