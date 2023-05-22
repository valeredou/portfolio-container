// import '@/global.css'
import '@/public/css/index.css'
import Scene from '@/components/canvas/Scene'

export const metadata = {
  title: 'Next.js + Three.js',
  description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        {/* <Layout>{children}</Layout> */}

        {/* <div
          style={{
            position: 'relative',
            width: ' 100%',
            height: '100%',
            overflow: 'auto',
            touchAction: 'auto',
          }}
        > */}

        <Scene />
        {/* </div> */}
      </body>
    </html>
  )
}
