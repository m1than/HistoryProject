import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const ModelViewer = ({ src }) => {
    const containerRef = useRef()

    useEffect(() => {
        const scene = new THREE.Scene()

        const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000)
        camera.position.z = 5

        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
        containerRef.current.appendChild(renderer.domElement)

        const loader = new GLTFLoader()
        loader.load(src, (gltf) => {
            scene.add(gltf.scene)
        })

        const ambientLight = new THREE.AmbientLight(0x404040)
        scene.add(ambientLight)

        const animate = () => {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        };

        animate()

        return () => {
            renderer.dispose()
        };
    }, [src])

    return <div ref={containerRef} />
};

export default ModelViewer