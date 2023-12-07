import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

function Model() {
  const glb = useLoader(GLTFLoader, '/public/vokzalB.glb');
  return <primitive object={glb.scene} />;
}

const ModelRenders = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Model />
    </Canvas>
  );
}

export default ModelRenders;