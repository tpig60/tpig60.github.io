import React from 'react'
import tw, { css } from 'twin.macro'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Team } from '../components/team'
import { Header, Nav } from '../components/layout'

import Ishikawa from 'src/images/problem'

export default function Home() {
  const query = graphql`
    query {
      file(relativePath: { eq: "header/imagen_problema.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tpi: file(relativePath: { eq: "logotpi.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      escudo: file(relativePath: { eq: "escudo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)

  return (
    <div tw="font-sans">
      <Header data={data} />
      <Nav />
      <main tw="bg-gray-100">
        <div tw="h-4" />
        <div tw="max-w-screen-lg mx-auto text-center">
          <h2 tw="text-2xl font-bold">
            Poca implementación de tecnología en el sector agro-colombiano junto con poco conocimiento técnico de los procesos productivos.
          </h2>
          <p tw="text-sm">
            A pesar de las grandes posibilidades que ofrece el agro en países como Colombia, este sector económico está en peligro a causa de su poca infraestructura y también por la alta informalidad, que frena de gran forma su productividad. Su desarrollo depende en gran medida de la infraestructura tecnológica contextualizada que se pueda investigar, desarrollar e implementar [1]. Adicional a lo anterior, la situación de pandemia que estamos viviendo ha impulsado a muchos a realizar huertos en sus propias casas, e incluso balcones. Son alternativas entretenidas, saludables y de alto impacto [2]. Estos cultivos en sitios cerrados tienen problemas de desarrollo por la poca luz que reciben en algunas épocas del año, por lo que juntando las dos perspectivas presentadas previamente, es adecuado, importante y de alta necesidad el diseño de un sistema de abstracción de información del cultivo para ayudar a los agricultores que siembren en sitios con poca luz y a aquellos individuos que tengan plantas en balcones o ventanas  a tomar mejores desiciones con respecto a sus cultivos.
          </p>
          <div tw="h-4" />
          <Ishikawa />
          {/*
          <ul tw="list-disc space-y-2">
            <li>
              A pesar de las grandes posibilidades que ofrece el agro en países como Colombia, este sector económico está en peligro a causa de su alta pobreza, pues alrededor del 50% de la población rural en Latinoamérica vive por debajo de ese umbral, y también por la alta informalidad, que frena de gran forma su productividad. <a tw="hover:underline text-blue-500" href="https://www.portafolio.co/negocios/empresas/las-tecnologias-que-podran-salvar-el-agro-colombiano-526281">[las tecnologias que podran salvar el agro colombiano]</a>
            </li>
            <li>
              Según la Sociedad de Agricultores de Colombia (SAC), las exportaciones agrarias del país se han concentrado en café, flores y banano, con 61% de las ventas. Estos rubros, sin duda, son importantes pero también resulta claro que Colombia podría aprovechar mejor su biodiversidad, su clima y su posición geográfica para expandir su portafolio y no depender de pocos sectores. Su desarrollo depende en gran medida de la infraestructura, pues se encuentra lejos de los principales puertos exportadores del país, lo cual encarece los costos de transporte de sus productos. Para la SAC, esta región es clave para sustituir una parte importante de las importaciones de granos y cereales, productos que el país no produce lo suficiente y que deben ser importados. La SAC pone como ejemplo el caso de la siembra de maíz tecnificado, que apenas cuatro años después de su inicio en la altillanura, ya constituye 15% de la producción nacional de este grano.  [https://www.dinero.com/edicion-impresa/sectores/articulo/situacion-actual-retos-del-agro-colombia/213012]

            </li>
          </ul>
          */}
          <h1 tw="font-bold text-3xl self-start">
            Referencias
          </h1>
          <ol tw="space-y-2">
            <li>
              [1] León Dario Velez Vargas. <b>La rotación de cultivos: una alternativa económica y ecológica para la producción agricola en colombia</b> .
            </li>
            <li>
              [2] Ingeniero Juan Carlos Naranjo
            </li>
          </ol>
        </div>
        <div tw="h-4" />
        <Team />
        <div tw="h-4" />
        <div tw="w-4/5 md:w-3/5 xl:w-2/5 mx-auto flex flex-wrap justify-center">
          <Img tw="w-1/2" fluid={data.tpi.childImageSharp.fluid} />
          <Img tw="w-1/2" fluid={data.escudo.childImageSharp.fluid} />
        </div>
        <div tw="h-4" />
      </main>
      <footer tw="h-32 bg-teal-200" />
    </div>
  )
}
