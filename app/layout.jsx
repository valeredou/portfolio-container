// import '@/global.css'
import '@/public/css/index.css'
import Scene from '@/components/canvas/Scene'
import Head from './head'

// export const metadata = {
//   title: 'Valère Douillé | Portfolio',
//   description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
// }

export const metadata = {
  title: 'Valère Douillé | Portfolio',
  description:
    'Explorez le portfolio innovant de Valère Douillé, développeur web passionné. Découvrez des projets web sur mesure, combinant créativité, efficacité et dernières technologies. Que ce soit pour des sites vitrines, des applications web ou des solutions e-commerce, vos idées deviendront réalités digitales',
  keywords: ['Valère', 'Douillé', 'Valère Douillé', 'Développeur', 'Développement Web', 'Frontend'],
  metadataBase: new URL('https://www.valeredouille.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Valère Douillé',
    description:
      'Explorez le portfolio innovant de Valère Douillé, développeur web passionné. Découvrez des projets web sur mesure, combinant créativité, efficacité et dernières technologies. Que ce soit pour des sites vitrines, des applications web ou des solutions e-commerce, vos idées deviendront réalités digitales',
    //url: 'https://nextjs.org',
    siteName: 'valeredouille.com',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
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
