import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import { useRef } from 'react'
import { useReducedMotion } from 'motion/react'

function Ornament() {
  const group = useRef()
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12
    }
  })
  return (
    <group ref={group}>
      <mesh>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial color="#c6a66b" metalness={0.72} roughness={0.23} wireframe />
      </mesh>
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshStandardMaterial color="#e5d2a6" metalness={0.65} roughness={0.3} wireframe />
      </mesh>
      <mesh scale={0.18} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial color="#f2d9a1" metalness={0.5} roughness={0.25} />
      </mesh>
    </group>
  )
}

export default function GeometricScene() {
  const reduce = useReducedMotion()
  if (reduce) return <div className="ornament-fallback" aria-hidden="true">✧</div>
  return (
    <div className="scene-wrap" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 4, 5]} intensity={2.1} color="#fff0cf" />
        <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.45}>
          <Ornament />
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
