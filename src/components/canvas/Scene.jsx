'use client'

import { Layout } from '@/components/dom/Layout'
// import '@/global.css'
import { Canvas } from '@react-three/fiber'
import { a as three } from '@react-spring/three'
import { Suspense, useEffect, useState } from 'react'
import Macbook from '@/components/canvas/Macbook'
import { Box, ContactShadows, Environment, Html, OrbitControls, PivotControls, useProgress } from '@react-three/drei'

import { useSpring, a as web } from '@react-spring/web'
import { isMobile } from 'react-device-detect'
import { Phone } from './Phone'
import { TypeAnimation } from 'react-type-animation'
import Lottie from 'lottie-react'
import fleche from '/public/fleche.json'
import LanguageDetector from 'i18next-browser-languagedetector'

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

export default function Scene({ ...props }) {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false)

  // This flag controls if click text is shown, alternates between true & false
  const [showClick, setShowClick] = useState(false)

  // We turn this into a spring animation that interpolates between 0 and 1
  const spring = useSpring({ open: Number(open) })

  // True if is mobile false if not, used because we need client rendered to see
  const [mobile, setMobile] = useState()

  const [lng, setLng] = useState(navigator.language)

  useEffect(() => {
    let tempLng = navigator.language.split('-')
    if (tempLng[0] !== 'fr') {
      setLng('en')
    }
    setMobile(isMobile)
  }, [])

  const textOffset = mobile ? 100 : 250

  const color = spring.open.to([0, 1], ['#f0f0f0', '#6155ff'])

  const seq = {
    en: ['Hi,\n', "Hi,\n i'm Valère", "Hi,\n i'm a web developer."],
    fr: ['Bonjour,\n', "Bonjour,\n je m'appelle Valère", 'Bonjour,\n je suis un développeur web.'],
  }
  console.log('color', color)
  return (
    <web.main style={{ background: spring.open.to([0, 1], ['#f0f0f0', '#0b1727']) }}>
      <web.h1
        className={mobile ? 'mobile' : ''}
        style={{
          opacity: spring.open.to([0, 1], [1, 0]),
          transform: spring.open.to((o) => `translate3d(-50%,${o * 50 - textOffset}px,0)`),
        }}
      >
        <TypeAnimation
          sequence={[
            seq[lng][0], // Types 'One'
            500, // Waits 2s
            seq[lng][1], // Types 'Three' without deleting 'Two'
            1000, // Waits 2s
            seq[lng][2], // Types 'Three' without deleting 'Two'
            () => {
              setTimeout(() => {
                setShowClick(true)
              }, 1000)
            },
          ]}
          style={{
            width: '100%',
            display: 'block',
            textAlign: 'center',
            whiteSpace: 'pre-line',
          }}
          className={'animated-text'}
          cursor={true}
        />
      </web.h1>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }} className='canvasR3F'>
        <three.pointLight
          position={[10, 10, 10]}
          intensity={2}
          color={spring.open.to([0, 1], ['#f0f0f0', '#f0f0f0'])}
        />
        <Suspense fallback={<Loader />}>
          {showClick && (
            <group
              rotation={[0, Math.PI, 0]}
              onClick={(e) => {
                e.stopPropagation()
                setOpen(!open)
              }}
            >
              {open === false && (
                <Html className='click-container' occlude='blending'>
                  <span className='click'>{lng === 'fr' ? 'Cliquez ici' : 'Click here'}</span>
                  <Lottie animationData={fleche} loop={true} className='lottie-animation' />
                </Html>
              )}

              {mobile ? (
                <Phone open={open} setOpen={setOpen} hinge={spring.open.to([0, 1], [1.575, 0])} scale={0.1} />
              ) : (
                <Macbook open={open} setOpen={setOpen} hinge={spring.open.to([0, 1], [1.575, -0.425])} />
              )}
            </group>
          )}

          {/* <Environment preset='city' /> */}
        </Suspense>
        <OrbitControls />
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
      </Canvas>
    </web.main>
  )
}
