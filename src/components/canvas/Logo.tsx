"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const MyLogo = () => {
    const file = useGLTF("./3d/logo.gltf")
    return(
        <mesh castShadow receiveShadow>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <primitive 
                object={file.scene}
                scale={3}
                position={[0, -3, 0]}
                rotation={[0, 0, 0]}
            />
        </mesh>
    )
}

const LogoCanvas = () => {
    return(
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <MyLogo/>
            </Suspense>
            <Preload all />
        </Canvas>
    )
}
export default LogoCanvas