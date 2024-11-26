import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, OrbitControls } from '@react-three/drei';

const TextScene = () => {
  const textRef = useRef();

  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.01; // テキストを回転
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Text3D
        ref={textRef}
        font="https://threejs-plactice.vercel.app/fontloader/fonts/helvetiker_regular.typeface.json"
        size={1}
        height={0.5}
        curveSegments={12}
      >
        Hello, World:)
        <meshStandardMaterial attach="material" color="white" />
      </Text3D>
    </>
  );
};

const TextCanvas = () => (
  <Canvas>
    <TextScene />
    <OrbitControls />
  </Canvas>
);

export default TextCanvas;
