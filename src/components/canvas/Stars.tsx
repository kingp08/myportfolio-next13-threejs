"use client"
import React, {useState, useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial as PM, Preload } from '@react-three/drei'
import { random } from 'maath'

type StarsProps = {
    [key: string]: any
}
// let width:number
// let height:number

const Stars = (props: StarsProps) => {
    const ref = useRef<THREE.Points>(null)
    const [sphere] = useState(() => new Float32Array( random.inSphere(new Float32Array(5000), { radius: 1.2 })));
    // const sphere = new Float32Array(random.inSphere(new Float32Array(5000), { radius: 1.2 }));
    // const numPoints = Number((width * height) / 2);
    // const positions = new Float32Array(numPoints * 3);
    useFrame((state, delta) => {
        if (ref.current) {
            (ref.current as THREE.Object3D).rotation.x -= delta / 10;
            (ref.current as THREE.Object3D).rotation.y -= delta / 15;
        }      
    });
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
            <PM
                transparent
                color='#f272c8'
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
        </group>
    )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>

        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas