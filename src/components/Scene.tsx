'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Float, Html, Stars } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

// Typing Code Animation Component
function TypingCode({ position, code, language }: { position: [number, number, number], code: string, language: string }) {
  const [displayedCode, setDisplayedCode] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (currentIndex < code.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(code.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, code])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      if (hovered) {
        meshRef.current.position.y += Math.sin(Date.now() * 0.003) * 0.01
      }
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[4, 3, 0.1]} />
        <meshStandardMaterial 
          color="#1e293b" 
          transparent 
          opacity={hovered ? 0.9 : 0.7}
          emissive={hovered ? "#334155" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
        <Html center>
          <div className="bg-slate-800 text-green-400 p-4 rounded text-sm font-mono max-w-md">
            <div className="text-purple-400 mb-2">{/* {language} */}</div>
            <div className="whitespace-pre-wrap">{displayedCode}</div>
            <div className="inline-block w-2 h-4 bg-green-400 animate-pulse"></div>
          </div>
        </Html>
      </mesh>
    </Float>
  )
}

// Floating Skill Orbs
function SkillOrb({ position, skill, color, size = 1 }: { position: [number, number, number], skill: string, color: string, size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.005
      meshRef.current.position.y += Math.sin(Date.now() * 0.0008) * 0.01
      
      if (hovered) {
        meshRef.current.scale.setScalar(1.3)
      } else {
        meshRef.current.scale.setScalar(clicked ? 1.1 : size)
      }
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={hovered ? 0.9 : 0.7}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.4 : 0}
          metalness={0.8}
          roughness={0.2}
        />
        <Html center>
          <div className="text-white font-bold text-lg drop-shadow-lg bg-black/50 px-2 py-1 rounded">
            {skill}
          </div>
        </Html>
      </mesh>
    </Float>
  )
}

// Animated Code Particles
function CodeParticles({ count = 200 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)

  useEffect(() => {
    if (meshRef.current) {
      const tempObject = new THREE.Object3D()
      for (let i = 0; i < count; i++) {
        tempObject.position.set(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30
        )
        tempObject.updateMatrix()
        meshRef.current.setMatrixAt(i, tempObject.matrix)
      }
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  }, [count])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
      meshRef.current.rotation.x += 0.0005
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} />
    </instancedMesh>
  )
}

// Floating Database Structure
function DatabaseStructure() {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
      if (hovered) {
        groupRef.current.position.y += Math.sin(Date.now() * 0.002) * 0.02
      }
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <group ref={groupRef} position={[0, -2, 0]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        {/* Main Database */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 3, 16]} />
          <meshStandardMaterial 
            color="#3b82f6" 
            transparent 
            opacity={0.8}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        
        {/* Database Connections */}
        <mesh position={[0, 2.5, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} />
        </mesh>
        
        <mesh position={[0, -2.5, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
        </mesh>

        {/* Data Flow Lines */}
        <line>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 2.5, 0, 0, -2.5, 0])}
              itemSize={3}
              args={[new Float32Array([0, 2.5, 0, 0, -2.5, 0]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#8b5cf6" linewidth={2} />
        </line>
      </group>
    </Float>
  )
}

// Floating API Endpoints
function APIEndpoints() {
  const endpoints = [
    { method: 'GET', path: '/users', color: '#10b981' },
    { method: 'POST', path: '/auth', color: '#3b82f6' },
    { method: 'PUT', path: '/update', color: '#f59e0b' },
    { method: 'DELETE', path: '/remove', color: '#ef4444' }
  ]

  return (
    <>
      {endpoints.map((endpoint, index) => (
        <Float key={index} speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
          <group position={[3 + index * 2, 1, 0]}>
            <mesh>
              <boxGeometry args={[2, 1, 0.1]} />
              <meshStandardMaterial 
                color="#1e293b" 
                transparent 
                opacity={0.8}
                emissive="#334155"
                emissiveIntensity={0.1}
              />
            </mesh>
            <Html center>
              <div className="bg-slate-800 text-green-400 p-2 rounded text-xs font-mono">
                <div className="text-purple-400 mb-1">{endpoint.method}</div>
                <div className="text-white">{endpoint.path}</div>
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </>
  )
}

// Central Developer Profile
function DeveloperProfile() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Profile Circle */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[2, 2, 0.2, 32]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            transparent 
            opacity={0.9}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Profile Text */}
        <Html center>
          <div className="text-center text-white">
            <div className="text-2xl font-bold mb-2">Irish Prajapati</div>
            <div className="text-lg opacity-80">Backend Developer</div>
            <div className="text-sm opacity-60 mt-2">Python • FastAPI • PostgreSQL</div>
          </div>
        </Html>
      </group>
    </Float>
  )
}

// Main Scene Component
export default function Scene() {
  const pythonCode = `from fastapi import FastAPI
from sqlalchemy import create_engine
import uvicorn

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/users")
async def create_user(user: User):
    return {"status": "success"}`

  const sqlCode = `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (username, email) 
VALUES ('john_doe', 'john@example.com');`

  const fastAPICode = `from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from typing import List

app = FastAPI(title="My API")

@app.get("/users/", response_model=List[User])
async def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()`

  const skills = [
    { skill: "Python", color: "#3776ab", position: [-8, 4, 0] as [number, number, number], size: 1.2 },
    { skill: "FastAPI", color: "#059669", position: [8, -4, 0] as [number, number, number], size: 1.0 },
    { skill: "PostgreSQL", color: "#336791", position: [0, 6, 2] as [number, number, number], size: 1.3 },
    { skill: "Django", color: "#092e20", position: [-6, -4, 1] as [number, number, number], size: 1.1 },
    { skill: "REST", color: "#dc2626", position: [6, 4, -1] as [number, number, number], size: 0.9 },
    { skill: "SQL", color: "#7c3aed", position: [-4, 0, 3] as [number, number, number], size: 1.0 },
  ]

  return (
    <div className="h-screen w-full relative">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)' }}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
        <pointLight position={[0, 10, 0]} intensity={1} color="#ffffff" />
        <spotLight 
          position={[0, 15, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1.2} 
          color="#ffffff"
        />

        {/* Stars Background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Animated Code Particles */}
        <CodeParticles count={300} />

        {/* Typing Code Animations */}
        <TypingCode 
          position={[-6, 2, 0]} 
          code={pythonCode} 
          language="Python" 
        />
        <TypingCode 
          position={[6, 2, 0]} 
          code={sqlCode} 
          language="SQL" 
        />
        <TypingCode 
          position={[0, 4, 0]} 
          code={fastAPICode} 
          language="FastAPI" 
        />

        {/* Skill Orbs */}
        {skills.map((skill, index) => (
          <SkillOrb
            key={index}
            position={skill.position}
            skill={skill.skill}
            color={skill.color}
            size={skill.size}
          />
        ))}

        {/* Database Structure */}
        <DatabaseStructure />

        {/* API Endpoints */}
        <APIEndpoints />

        {/* Central Developer Profile */}
        <DeveloperProfile />

        {/* Floating Title */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Text
            position={[0, 8, 0]}
            fontSize={1.5}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#8b5cf6"
          >
            Backend Development Experience
          </Text>
        </Float>

        {/* Interactive Controls */}
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
          maxDistance={40}
          minDistance={8}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Overlay Instructions */}
      <div className="absolute bottom-4 left-4 text-white text-sm opacity-70">
        <div>🖱️ Drag to rotate • Scroll to zoom • Click orbs to interact • Auto-rotating</div>
      </div>
    </div>
  )
} 