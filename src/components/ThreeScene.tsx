import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!mountRef.current) return
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)
    // Create Particles (Nodes)
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 180
    const posArray = new Float32Array(particlesCount * 3)
    const velocityArray: {
      x: number
      y: number
      z: number
    }[] = []
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Spread particles in a sphere-like volume
      const r = 18 * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      posArray[i] = r * Math.sin(phi) * Math.cos(theta)
      posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta)
      posArray[i + 2] = r * Math.cos(phi)
      velocityArray.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015,
      })
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3),
    )
    // Material for nodes (Spider Blue)
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)
    // Lines (Web - Spider Red)
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0xdc2626,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    })
    const linesGeometry = new THREE.BufferGeometry()
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(linesMesh)
    camera.position.z = 25
    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    const windowHalfX = window.innerWidth / 2
    const windowHalfY = window.innerHeight / 2
    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX
      mouseY = event.clientY - windowHalfY
    }
    document.addEventListener('mousemove', onDocumentMouseMove)
    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      targetX = mouseX * 0.001
      targetY = mouseY * 0.001
      // Base rotation
      particlesMesh.rotation.y += 0.001
      particlesMesh.rotation.x += 0.0005
      linesMesh.rotation.y += 0.001
      linesMesh.rotation.x += 0.0005
      // Parallax effect from mouse
      particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y)
      particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x)
      linesMesh.rotation.y += 0.05 * (targetX - linesMesh.rotation.y)
      linesMesh.rotation.x += 0.05 * (targetY - linesMesh.rotation.x)
      // Update particle positions
      const positions = particlesGeometry.attributes.position
        .array as Float32Array
      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] += velocityArray[i].x
        positions[i * 3 + 1] += velocityArray[i].y
        positions[i * 3 + 2] += velocityArray[i].z
        // Boundary check to keep them inside a radius
        const x = positions[i * 3]
        const y = positions[i * 3 + 1]
        const z = positions[i * 3 + 2]
        if (x * x + y * y + z * z > 600) {
          velocityArray[i].x *= -1
          velocityArray[i].y *= -1
          velocityArray[i].z *= -1
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true
      // Update lines (Web connections)
      const linePositions = []
      for (let i = 0; i < particlesCount; i++) {
        for (let j = i + 1; j < particlesCount; j++) {
          const dx = positions[i * 3] - positions[j * 3]
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
          const distSq = dx * dx + dy * dy + dz * dz
          if (distSq < 25) {
            // Connection threshold
            linePositions.push(
              positions[i * 3],
              positions[i * 3 + 1],
              positions[i * 3 + 2],
              positions[j * 3],
              positions[j * 3 + 1],
              positions[j * 3 + 2],
            )
          }
        }
      }
      linesGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3),
      )
      renderer.render(scene, camera)
    }
    animate()
    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', onDocumentMouseMove)
      cancelAnimationFrame(animationFrameId)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      linesGeometry.dispose()
      linesMaterial.dispose()
      renderer.dispose()
    }
  }, [])
  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen"
    />
  )
}
