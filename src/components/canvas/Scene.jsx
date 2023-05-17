'use client'

import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import { Canvas } from '@react-three/fiber'
import { a as three } from '@react-spring/three'
import { Suspense, useEffect, useState } from 'react'
import Macbook from '@/components/canvas/Macbook'
import { Box, ContactShadows, Environment, Html, OrbitControls, useProgress } from '@react-three/drei'

import { useSpring, a as web } from '@react-spring/web'
import { isMobile } from 'react-device-detect'

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped

  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false)
  // We turn this into a spring animation that interpolates between 0 and 1
  const spring = useSpring({ open: Number(open) })

  const [mobile, setMobile] = useState()

  useEffect(() => {
    setMobile(isMobile)
  }, [])

  return (
    <web.main style={{ background: spring.open.to([0, 1], ['#f0f0f0', '#c1dadf']) }}>
      <web.h1
        className={mobile ? 'mobile' : ''}
        style={{
          opacity: spring.open.to([0, 1], [1, 0]),
          transform: spring.open.to((o) => `translate3d(-50%,${o * 50 - 100}px,0)`),
        }}
      >
        {"Hi, i'm Valère"}
      </web.h1>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, -30], fov: 35 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
      >
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={spring.open.to([0, 1], ['#f0f0f0', '#c1dadf'])}
        />
        <Suspense fallback={<Loader />}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => {
              e.stopPropagation()
              console.log('click group')
              setOpen(!open)
            }}
          >
            <Macbook open={open} hinge={spring.open.to([0, 1], [1.575, -0.425])} />
          </group>
          {/* <Environment preset='city' /> */}
        </Suspense>
        <OrbitControls />
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
      </Canvas>
    </web.main>
  )
}
