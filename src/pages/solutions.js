
import React from 'react'
import 'twin.macro'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Team } from '../components/team'
import { Header, Nav, Footer } from '../components/layout'

import solution1 from 'src/images/solutions/solucion_1.jpg'
import solution2 from 'src/images/solutions/solucion_2.png'
import solution3 from 'src/images/solutions/solucion_3.jpg'
import solution4 from 'src/images/solutions/solucion_4.jpg'


const Solution = ({ img, title, text }) => (
  <div tw="w-1/2 text-center border-gray-400 rounded-md p-4">
    <div tw="flex justify-center">
      <img tw="h-64 w-64 rounded-md" src={img} alt={text}/>
    </div>
    <h1 tw="font-bold">
      {title}
    </h1>
    <details>
      <summary tw="font-bold">
        Ver más
      </summary>
      <p>
        {text}
      </p>
    </details>
  </div>
)

export default function Home() {
  const query = graphql`
    query {
      file(relativePath: { eq: "header/imagen_soluciones.jpg" }) {
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
        <div tw="mx-auto max-w-screen-lg flex items-center justify-center flex-wrap">
          <Solution title="Redes de sensores:" img={solution1} text="Es posible realizar una red de sensores (Ph, humedad,  repartida por todo el cultivo, la cual a través de nodos de interconexión inalámbrica, enviaran la información recolectada periódicamente (aproximadamente cada 15 minutos) a un dispositivo maestro remoto, el cuál recolectaría y organizaría la información, para que a través de análisis por Big data, aprendiera a entregar información y alertas de requerimientos del cultivo, mostrando esta información bien sea en un display LCD, un programa en un ordenador o un servidor web." />
          <Solution title="Drones para la recolección de muestras en el terreno junto con dispositivos de medición:" img={solution3} text="A través de la creación de dispositivos de medición de las variables de interés, que fuesen fijos, se podría crear una estación de laboratorio a escala, en la cual se pondrían las muestras de todo el terreno, previamente tomadas con un dron programado y adaptado para ello, y junto con un software, se mapearía de forma gráfica y mostraría la información, estado y alertas del terreno, para tener conocimiento de dónde atacar los requerimientos que necesite el cultivo." />
          {/*
          <Solution title="Dispositivos de medición de nutrientes portátiles:" img={solution2} text="La creación de un dispositivos de medición de micronutrientes portátiles,permitiría, en la medida que se recorre el terreno, conocer el estado de cada zona, mediante la toma y análisis de muestras en el dispositivo, pues además, éste contaría con un display en cuál mostraría la información, y de ésta forma el agricultor sabría exactamente en dónde e incluso ir satisfaciendo los requerimientos del terreno donde se necesite y a medida que lo recorre y toma las muestras." />
          */}
          <Solution title="Espectrógrafo portátil para la medición de variables de interés:" img={solution4} text="A través de técnicas de espectroscopía, es posible utilizando sensores dedicados para ello, o incluso con mejoras adaptadas, elaborar un espectroscopio ya sea portátil o fijo, con el fin de ser utilizado similar a las soluciones 2 o 3 respectivamente, el cual además, podría medir una amplia gama de variables tanto del suelo, como de las hojas, tallos o cualquier otro elemento del cultivo, y así tener un análisis incluso más completo del mismo, para realizar decisiones que le favorezcan como rotación de cultivos o cualquier otra." />
        </div>
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
