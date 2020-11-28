import React from 'react'
import tw from 'twin.macro'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Team } from 'src/components/team'
import "@reach/tooltip/styles.css";

import { Header, Nav, Footer } from 'src/components/layout'
import { Pestal } from './pestal'


import ods2 from 'src/images/ods/ODS_2.jpg'
import ods9 from 'src/images/ods/ODS_9.png'
import ods12 from 'src/images/ods/ODS_12.jpg'
import Tooltip from "@reach/tooltip";

const ODS = ({ src, text }) => {
  const ODSImg = tw.img`w-32 h-32 rounded-sm`
  return (
    <Tooltip label={text} tw="max-w-md whitespace-normal p-4">
      <ODSImg src={src}/>
    </Tooltip>
  )
}

export default function Home() {
  const query = graphql`
    query {
      file(relativePath: { eq: "header/imagen_contexto.jpg" }) {
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
        <p tw="text-gray-700 max-w-screen-lg mx-auto text-center">
          (*) Haga click sobre cada elemento de la matriz PESTAL, esto desplegará un diálogo. Al posar el mouse encima de cada actor se mostrará más información.
        </p>
        <div tw="h-4" />
        <Pestal />
        <div tw="h-4" />
        <div tw="w-3/5 mx-auto flex justify-around">
          <ODS src={ods2} text="El incremento en la productividad agrícola es uno de los primeros pasos para satisfacer las necesidades nutricionales de aquellos más vulnerables."/>
          <ODS src={ods9} text="El agro Colombiano, aunque ya presenta industrialización e uso de tecnología este no está presente en todos los niveles del agro, pequeños y medianos agricultores y campesinos rurales y urbanos no cuentan con fácil acceso a estas tecnologías."/>
          <ODS src={ods12} text="La tecnificación de la agricultura urbana y rural permite mejorar la toma de decision de cultivos y responder mejor a las necesidades propias y del mercado a partir de mayor datos e información disponible."/>
        </div>
        <div tw="h-8" />
        <div tw="mx-auto max-w-screen-lg">
          <h1 tw="font-bold text-3xl self-start">
            Referencias
          </h1>
          <ol tw="space-y-2">
            <li>
              [1] Agropinos, 14 de Agosto 2019, <b>Políticas y programas agrarios en Colombia que debe conocer.</b> Disponible en: <a href="https://www.agropinos.com/politicas-y-programas-agrarios-en-colombia">https://www.agropinos.com/politicas-y-programas-agrarios-en-colombia</a>
            </li>
            <li>
              [2] Universidad de la Sabana, 2020, ¿Cómo está la desnutrición infantil en Colombia? disponible en: https://www.unisabana.edu.co/portaldenoticias/al-dia/como-esta-la-desnutricion-infantil-en-colombia/
          </li>
            <li>
              [3] Programa de las naciones unidas para el desarrollo, 2020, Objetivo 2: Hambre cero. Disponible en: https://www.undp.org/content/undp/es/home/sustainable-development-goals/goal-2-zero-hunger.html
          </li>
            <li>
              [4] Minagricultura, 2020, leyes referentes a la agricultura. Disponible en: https://www.minagricultura.gov.co/Normatividad/Paginas/Leyes.aspx
          </li>
            <li>
              [5] Velez, León. 19 de septiembre del 2020. Entrevista a nombre del grupo 60 TPI 2020-02. Google Meet.
          </li>
          </ol>

        </div>
        <div tw="h-4" />
        <div tw="h-32" />
        <Team />
        <div tw="h-4" />
        <div tw="w-4/5 md:w-3/5 xl:w-2/5 mx-auto flex flex-wrap justify-center">
          <Img tw="w-1/2" fluid={data.tpi.childImageSharp.fluid} />
          <Img tw="w-1/2" fluid={data.escudo.childImageSharp.fluid} />
        </div>
        <div tw="h-4" />
      </main>
      <Footer />
    </div>
  )
}
