/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/iphone-12-pro-05dfc991665e45c68c8b7062136c0c6e
Title: iPhone 12 Pro
*/

import React, { useEffect, useRef, useState } from 'react'
import { Html, Mask, useGLTF, useMask } from '@react-three/drei'
import * as THREE from 'three'
import { a as three } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import { UilTimes } from '@iconscout/react-unicons'

export function Phone({ children, open, setOpen, onClick, hinge, positionY, ...props }) {
  const { nodes, materials } = useGLTF('/iphone.glb')

  const group = useRef()
  const screenGroup = useRef()

  const stencil = useMask(1, true)

  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)

  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])

  const dummy = new THREE.Vector3()
  const lookAtPos = new THREE.Vector3()

  // Make it float in the air when it's opened
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // group.current.rotation.x = THREE.MathUtils.lerp(
    //   group.current.rotation.x,
    //   open ? Math.cos(t / 10) / 10 + 0.25 : 0,
    //   0.1,
    // )
    // group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t) / 10 : 0, 0.1)
    //group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t) / 100 : 0, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -5, 0.1)

    const step = 0.1
    state.camera.position.lerp(dummy.set(0, 0, open ? -18 : -30), step)

    lookAtPos.x = 0
    lookAtPos.y = 0
    lookAtPos.z = 0

    state.camera.lookAt(lookAtPos)
    state.camera.updateProjectionMatrix()
  })

  return (
    <group
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
      ref={group}
      {...props}
    >
      {/* {open && (
        <Html occlude='blending'>
          <div
            className='close'
            onClick={() => {
              setOpen(false)
            }}
          >
            <UilTimes />
          </div>
        </Html>
      )} */}
      <three.group ref={screenGroup} position={[-1, 0, 0]} rotation-x={hinge}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.iPhone__12_Pro_BodyFrame_0.geometry} material={materials.BodyFrame} />
            <mesh geometry={nodes.iPhone__12_Pro_MicrophoneSpeaker_0.geometry} material={materials.MicrophoneSpeaker} />
            <mesh geometry={nodes.iPhone__12_Pro_GrayGlossy2_0.geometry} material={materials.GrayGlossy2} />
            <mesh geometry={nodes.iPhone__12_Pro_Antenna_0.geometry} material={materials.Antenna} />
            <mesh geometry={nodes.iPhone12_Pro_Body_0.geometry} material={materials.Body} />

            <mesh geometry={nodes.Camera1_PacificBlue_0.geometry} material={materials.PacificBlue} />
            <mesh geometry={nodes.Camera1_GrayGlossy_0.geometry} material={materials.GrayGlossy} />
            <mesh geometry={nodes.Camera1_FrontCamera_0.geometry} material={materials.FrontCamera} />
            <mesh geometry={nodes.Camera1_Blackmatte_0.geometry} material={materials.Blackmatte} />
            <mesh geometry={nodes.Camera1_Cameralens_0.geometry} material={materials.Cameralens} />
            <mesh geometry={nodes.Camera1_Glass_0.geometry} material={materials.Glass} />

            <mesh geometry={nodes.Flash_Flash2_0.geometry} material={materials.Flash2} />
            <mesh geometry={nodes.Flash_Flash_0.geometry} material={materials.Flash} />
            <mesh geometry={nodes.LiDar_LiDar__0.geometry} material={materials.Blackmatte} />
            <mesh geometry={nodes.Bezel_bezel_0.geometry} material={materials.bezel} />

            <mesh geometry={nodes.FrontCamera_Cameralens_0.geometry} material={materials.Cameralens} />
            <mesh geometry={nodes.FrontCamera_FrontCamera_0.geometry} material={materials.FrontCamera} />
            <mesh geometry={nodes.FrontCamera_Glass_0.geometry} material={materials.Glass} />
            <mesh geometry={nodes.FrontMic_GrayGlossy2_0.geometry} material={materials.GrayGlossy2} />
            <mesh geometry={nodes.FrontMic_MicrophoneSpeaker_0.geometry} material={materials.MicrophoneSpeaker} />
            <mesh geometry={nodes.FrontCamera001_bezel001_0.geometry} material={materials['bezel.001']} />

            <mesh geometry={nodes.Camera3_PacificBlue_0.geometry} material={materials.PacificBlue} />
            <mesh geometry={nodes.Camera3_GrayGlossy_0.geometry} material={materials.GrayGlossy} />
            <mesh geometry={nodes.Camera3_FrontCamera_0.geometry} material={materials.FrontCamera} />
            <mesh geometry={nodes.Camera3_Blackmatte_0.geometry} material={materials.Blackmatte} />
            <mesh geometry={nodes.Camera3_Cameralens_0.geometry} material={materials.Cameralens} />
            <mesh geometry={nodes.Camera3_Glass_0.geometry} material={materials.Glass} />

            <mesh geometry={nodes.Camera2_PacificBlue_0.geometry} material={materials.PacificBlue} />
            <mesh geometry={nodes.Camera2_GrayGlossy_0.geometry} material={materials.GrayGlossy} />
            <mesh geometry={nodes.Camera2_FrontCamera_0.geometry} material={materials.FrontCamera} />
            <mesh geometry={nodes.Camera2_Blackmatte_0.geometry} material={materials.Blackmatte} />
            <mesh geometry={nodes.Camera2_Cameralens_0.geometry} material={materials.Cameralens} />
            <mesh geometry={nodes.Camera2_Glass_0.geometry} material={materials.Glass} />

            <mesh geometry={nodes.Screen_Wallpaper_0.geometry} position={[0, 0, -0.04]}>
              <Html
                position={[0.007, 0.495, 0.05]}
                className='htmlScreenMobile'
                distanceFactor={0.452}
                // distanceFactor={0.5}
                occlude='blending'
                transform
                pointerEvents={open ? 'initial' : 'none'}
              >
                {open && (
                  <div
                    className='close'
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    <UilTimes />
                  </div>
                )}
                <iframe src='https://portfolio-grid-gamma.vercel.app/fr' />
              </Html>
            </mesh>
            <mesh geometry={nodes.Apple_Logo_Logo_0.geometry} material={materials.Logo} />
            <mesh geometry={nodes.CameraModule001_Glass_0.geometry} material={materials.Glass} />
            <mesh
              geometry={nodes.CameraModule002_MicrophoneSpeaker_0.geometry}
              material={materials.MicrophoneSpeaker}
            />

            {/* <mesh geometry={nodes.VolumeButton_BodyFrame_0.geometry} material={materials.BodyFrame} />
            <mesh geometry={nodes.PowerButton_BodyFrame_0.geometry} material={materials.BodyFrame} />
            <mesh geometry={nodes.Port_Blackmatte_0.geometry} material={materials.Blackmatte} />
            <mesh geometry={nodes.Port_BodyFrame_0.geometry} material={materials.BodyFrame} />
            <mesh geometry={nodes.SimTray_Blackmatte_0.geometry} material={materials.Blackmatte} />
            <mesh geometry={nodes.SimTray_BodyFrame_0.geometry} material={materials.BodyFrame} />
            <mesh geometry={nodes.MuteButton_BodyFrame_0.geometry} material={materials.BodyFrame} /> */}
          </group>
        </group>
      </three.group>
    </group>
  )
}

useGLTF.preload('/iphone.glb')
