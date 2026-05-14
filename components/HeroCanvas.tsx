'use client'

import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !mountRef.current) return

    const mount = mountRef.current
    let animId: number
    let destroyed = false
    let threeRenderer: import('three').WebGLRenderer | null = null
    let onMouseMove: (e: MouseEvent) => void
    let onResize: () => void

    ;(async () => {
      const THREE = await import('three')
      if (destroyed || !mount) return

      // ── Scene ──────────────────────────────────────────────────────────
      const scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0x010108, 0.035)
      scene.background = new THREE.Color(0x010108)

      const camera = new THREE.PerspectiveCamera(
        75,
        mount.clientWidth / mount.clientHeight,
        0.1,
        1000
      )
      camera.position.set(0, 0, 5)

      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(mount.clientWidth, mount.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      mount.appendChild(renderer.domElement)
      threeRenderer = renderer

      // ── Star field (6000粒) ────────────────────────────────────────────
      const starCount = 6000
      const starGeo = new THREE.BufferGeometry()
      const starPos = new Float32Array(starCount * 3)
      const starCol = new Float32Array(starCount * 3)
      const palette = [
        new THREE.Color('#ffffff'),
        new THREE.Color('#6ee7b7'),
        new THREE.Color('#a78bfa'),
      ]

      for (let i = 0; i < starCount; i++) {
        starPos[i * 3]     = (Math.random() - 0.5) * 200
        starPos[i * 3 + 1] = (Math.random() - 0.5) * 200
        starPos[i * 3 + 2] = (Math.random() - 0.5) * 200
        const c = palette[Math.floor(Math.random() * palette.length)]
        starCol[i * 3]     = c.r
        starCol[i * 3 + 1] = c.g
        starCol[i * 3 + 2] = c.b
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
      starGeo.setAttribute('color',    new THREE.BufferAttribute(starCol, 3))

      const stars = new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({
          size: 0.15,
          vertexColors: true,
          transparent: true,
          opacity: 0.85,
          sizeAttenuation: true,
        })
      )
      scene.add(stars)

      // ── Nebula (雲状パーティクル) ────────────────────────────────────
      const nebCount = 800
      const nebGeo = new THREE.BufferGeometry()
      const nebPos = new Float32Array(nebCount * 3)
      const nebCol = new Float32Array(nebCount * 3)
      const nebPalette = [new THREE.Color('#6ee7b7'), new THREE.Color('#a78bfa')]

      for (let i = 0; i < nebCount; i++) {
        const r     = Math.random() * 25 + 5
        const theta = Math.random() * Math.PI * 2
        const phi   = Math.random() * Math.PI
        nebPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
        nebPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.4
        nebPos[i * 3 + 2] = r * Math.cos(phi) - 10
        const c = nebPalette[Math.floor(Math.random() * nebPalette.length)]
        nebCol[i * 3]     = c.r
        nebCol[i * 3 + 1] = c.g
        nebCol[i * 3 + 2] = c.b
      }
      nebGeo.setAttribute('position', new THREE.BufferAttribute(nebPos, 3))
      nebGeo.setAttribute('color',    new THREE.BufferAttribute(nebCol, 3))

      const nebula = new THREE.Points(
        nebGeo,
        new THREE.PointsMaterial({
          size: 0.8,
          vertexColors: true,
          transparent: true,
          opacity: 0.25,
          sizeAttenuation: true,
        })
      )
      scene.add(nebula)

      // ── Icosahedra ×3 ────────────────────────────────────────────────
      const icoConfigs = [
        { x: -4,  y: 1.5,  z: -3, r: 1.2, speed: 0.003 },
        { x:  3.5, y: -1,  z: -5, r: 1.8, speed: 0.002 },
        { x:  0,  y: -2.5, z: -4, r: 0.9, speed: 0.004 },
      ]

      const icos = icoConfigs.map(({ x, y, z, r, speed }) => {
        const mesh = new THREE.Mesh(
          new THREE.IcosahedronGeometry(r, 1),
          new THREE.MeshBasicMaterial({
            color: 0x6ee7b7,
            wireframe: true,
            transparent: true,
            opacity: 0.12,
          })
        )
        mesh.position.set(x, y, z)
        mesh.userData = { speed, floatOffset: Math.random() * Math.PI * 2, baseY: y }
        scene.add(mesh)
        return mesh
      })

      // ── Grid plane ───────────────────────────────────────────────────
      const grid = new THREE.GridHelper(40, 20, 0x6ee7b7, 0x6ee7b7)
      grid.position.set(0, -4, -5)
      const gridMats = Array.isArray(grid.material) ? grid.material : [grid.material]
      gridMats.forEach((m) => {
        m.transparent = true
        m.opacity = 0.15
      })
      scene.add(grid)

      // ── Mouse parallax ───────────────────────────────────────────────
      let mouseX = 0
      let mouseY = 0
      let camX   = 0
      let camY   = 0

      onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth  - 0.5) * 2
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2
      }
      window.addEventListener('mousemove', onMouseMove)

      // ── Resize ───────────────────────────────────────────────────────
      onResize = () => {
        const w = mount.clientWidth
        const h = mount.clientHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }
      window.addEventListener('resize', onResize)

      // ── Animation loop ────────────────────────────────────────────────
      const animate = () => {
        if (destroyed) return
        animId = requestAnimationFrame(animate)
        const t = Date.now() * 0.001

        stars.rotation.y  += 0.0003
        stars.rotation.x  += 0.0001
        nebula.rotation.y += 0.0005

        icos.forEach((ico) => {
          ico.rotation.x += ico.userData.speed
          ico.rotation.y += ico.userData.speed * 1.3
          ico.position.y  = ico.userData.baseY + Math.sin(t + ico.userData.floatOffset) * 0.3
        })

        // GridをZ方向に流す（奥から手前へ）
        grid.position.z += 0.02
        if (grid.position.z > -3) grid.position.z = -5

        // カメラをマウスにlerpで追従
        camX += (mouseX * 0.8 - camX) * 0.05
        camY += (-mouseY * 0.4 - camY) * 0.05
        camera.position.x = camX
        camera.position.y = camY

        renderer.render(scene, camera)
      }
      animate()
    })()

    return () => {
      destroyed = true
      cancelAnimationFrame(animId)
      if (onMouseMove) window.removeEventListener('mousemove', onMouseMove)
      if (onResize)    window.removeEventListener('resize', onResize)
      if (threeRenderer) {
        if (mount.contains(threeRenderer.domElement)) {
          mount.removeChild(threeRenderer.domElement)
        }
        threeRenderer.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  )
}
