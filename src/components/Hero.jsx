import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { SectionWrapper } from '../hoc';


const Hero = () => {

  const mountRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, controls, textMesh, lineText;
    const mount = mountRef.current;

    const init = () => {
      // カメラとシーンの設定
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.set(0, -500, 900);

      scene = new THREE.Scene();
      scene.background = null;

      // レンダラーの設定
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      mount.appendChild(renderer.domElement);

      // コントロールの追加
      controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0, 0);
      controls.update();

      // フォントのロード
      const loader = new FontLoader();
      loader.load(
        'https://threejs-plactice.vercel.app/fontloader/fonts/helvetiker_regular.typeface.json',
        (font) => {
          const color =  0x808080;

          const matDark = new THREE.LineBasicMaterial({
            color: color,
            opacity: 0.8,
            side: THREE.DoubleSide,
          });

          const matLite = new THREE.MeshBasicMaterial({
            color: 0xFEFBFC,
            transparent: true,
            opacity: 1.0,
            side: THREE.DoubleSide,
          });

          const message = 'Hello, World:)\nI\'m Rinka Homma.';

          const shapes = font.generateShapes(message, 20);

          const geometry = new THREE.ShapeGeometry(shapes);
          geometry.computeBoundingBox();
          const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
          geometry.translate(xMid, 0, 0);

          // テキストのメッシュ
          textMesh = new THREE.Mesh(geometry, matLite);
          textMesh.position.z = -100;
          textMesh.position.x = -100;
          scene.add(textMesh);

          // ラインの追加
          lineText = new THREE.Object3D();
          shapes.forEach((shape) => {
            const points = shape.getPoints();
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            lineGeometry.translate(xMid, 0, 0);
            const lineMesh = new THREE.Line(lineGeometry, matDark);
            lineText.add(lineMesh);
          });
          scene.add(lineText);

          animate();
        }
      );

      // ウィンドウリサイズ処理
      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      scene.rotation.x += 0.002;
      scene.rotation.z += 0.002;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    init();

    // クリーンアップ処理
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);


  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={` absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX}
      flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>



        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hello, World:) <br></br> <span className='text-[#915eff]'>I'm Rinka Homma.</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop web applications, user interfaces <br
              className='sm:block hidden'/>
              and creative contents.
            </p>
        </div>

        <div style={{ width: '100%', height: '100vh' }}>
          <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
        </div>

        </div>
        <ComputersCanvas />
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary 
            flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                tranition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero, "");