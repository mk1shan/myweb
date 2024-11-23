// components/Character3D.js
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ mousePosition }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/robot.glb'); // You'll need to add model file

  return (
    <group ref={ref} 
      rotation={[0, mousePosition.x * 0.5, 0]}
      position={[0, -1, 0]}>
      <mesh
        geometry={nodes.Robot.geometry}
        material={materials.RobotMaterial}
        scale={[1.5, 1.5, 1.5]}
      />
    </group>
  );
}

export default function Character3D() {
  return (
    <div style={{ height: "400px", width: "300px" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model mousePosition={{ x: 0, y: 0 }} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
