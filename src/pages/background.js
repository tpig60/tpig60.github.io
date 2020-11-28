
import React from 'react'
import 'twin.macro'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Team } from '../components/team'
import { Header, Nav, Footer } from '../components/layout'

import Mapa from 'src/images/antecedentes/mapa'
import Pin1 from 'src/images/antecedentes/pin1'
import Pin2 from 'src/images/antecedentes/pin2'
import Pin3 from 'src/images/antecedentes/pin3'
import Pin4 from 'src/images/antecedentes/pin4'


function PinElement({ title, author, text, pin: Pin }) {
  let iconScale = 2.1
  return (
    <div tw="flex">
      <Pin width={iconScale * 17.3} height={iconScale * 22.72} />
      <div tw="ml-2 flex-grow flex flex-col w-full items-center">
        <h1 tw="font-bold text-sm self-start">
          {title}
        </h1>
        <h2 tw="text-sm self-start">
          {author}
        </h2>
        <details tw="self-start">
          <summary>
            Ver más
          </summary>
          <p tw="text-sm">
            {text}
          </p>
        </details>
      </div>
    </div>
  )
}

export default function Home() {
  const query = graphql`
    query {
      file(relativePath: { eq: "header/imagen_antecedentes.jpg" }) {
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

  let scaleMap = 2

  return (
    <div tw="font-sans">
      <Header data={data} />
      <Nav />
      <main tw="bg-gray-200">
        <div tw="h-4" />
        <div tw="max-w-screen-lg mx-auto flex flex-col items-center">
          <div id="aaa" tw="flex w-full">
            <div tw="w-1/3">
              <Mapa width={scaleMap * 146.67} height={scaleMap * 208.1} />
            </div>
            <div tw="w-2/3">
              <PinElement
                pin={Pin1}
                title={"DISEÑO, CONSTRUCCIÓN Y EVALUACIÓN DE UN FLUORÍMETRO Y UNA CÁMARA MULTIESPECTRAL PARA USO EN AGRICULTURA Y BIOLOGÍA"}
                author={"Pineda D. M. Medellín, Antioquia, Colombia. Año 2017."}
                text={"La fluorescencia es una propiedad que se puede utilizar para estimar el contenido de clorofila foliar en plantas, que a su vez está relacionada directamente con el contenido de nitrógeno en las hojas. Esa medición es entonces usada como criterio para determinar la aplicación o no de fertilizantes y estados nutricionales en plantas. En este trabajo se desarrolló un equipo portátil para medir fluorescencia en general pero modificado para medir específicamente fluorescencia de clorofila total en mediciones de campo [1]."}
              />
              <PinElement
                pin={Pin2}
                title={"REDES DE SENSORES INALÁMBRICOS APLICADAS A OPTIMIZACIÓN EN AGRICULTURA DE PRESICIÓNPARA CULTIVOS DE CAFÉ EN COLOMBIA"}
                author={"Urbano-Molano F. A. Popayán, Cauca, Colombia. Año 2013."}
                text={
                  "En este trabajo se presenta el diseno preliminar de una red de sensores inalámbricos para agricultura de precisión en cultivos de café en Colombia usando el estándar 802.15.4. La arquitectura del sistema consiste de: tres nodos que utilizan sensores para temperatura y humedad del suelo, temperatura de las hojas, radiacion solar y flujo fotosintético usando un radio XBee 802.15.4; el nodo coordinador posee una estacion climatológica y un módem GSM que se encarga de enviar la información a un servidor central. El diseno del sistema presentó un buen desempeño, aunque inicialmente se presentaron algunas perdaacvidas de datos entre los nodos sensores y el coordinador. A pesar de la situación, el diseño preliminar envió vsatisfactoriamente los datos al servidor localizado en la ciudad de Popayán, Colombia [2]."
                }
              />
              <PinElement
                pin={Pin3}
                title={"ANÁLISIS DE LA IMPLEMENTACIÓN DEL INTERNET DE LAS COSAS EN LA AGROINDUSTRIA COLOMBIANA PARA OPTIMIZAR Y AUMENTAR LOS PROCESOS DE PRODUCCIÓN"}
                author={"Durán E. O. Pamplona, Norte de Santander, Colombia. Año 2019."}
                text={"En la universidad del Quindio, Colombia, se implementó un sistema de instrumentación para el invernadero de la unidad agro ecológica La Aldana (Muñoz y Buitrago 2011). A través de este sistema se hace la medición d variables físicas como temperatura, humedad relativa yhumedad del suelo. Posteriormente estos datos son controlados al interior del invernadero y de manera simultánea se monitorizan inalámbricamente, desde el cual dependiendo de los datos activa de forma autónoma un sistema de control de goteo por histéresis el cual racionaliza el uso del agua del cultivo. En el proceso y desarrollo de cultivos es necesario implementar estos sistemas con los cuales se pueden integrar tecnologías de las IoT en el contexto de la agricultura. Es posible observar cómo tanto para la agricultura extensiva o en este caso, de invernadero o protegida, el monitoreoy control da como resultado un manejo apropiado. Con todo esto se estaría garantizando resultados favorables que ayudan al mejoramiento mismo de la producción alimenticia tanto en nuestras regiones como en el mundo [3]."}
              />
              <PinElement
                pin={Pin4}
                title={"ANÁLISIS DE LA IMPLEMENTACIÓN DEL INTERNET DE LAS COSAS EN LA AGROINDUSTRIA COLOMBIANA PARA OPTIMIZAR Y AUMENTAR LOS PROCESOS DE PRODUCCIÓN"}
                author={"Durán E. O. Santa Marta, Magdalena, Colombia. Año 2019."}
                text={"En el presente artículo se aborda la problemática relacionada con la escaza implementación de alternativas tecnológicas de planificación y los sobrecostos en la atención de enfermedades que estos presentan, así como la importancia de la implementación de herramientas tecnológicas que permitan mejorar la planificación de las actividades agrícolas, predecir daños y tomar decisiones adecuadas ante situaciones que afectan el desarrollo de los cultivos de papa Solanum tuberosum variedad Diacol Capiro en Cundinamarca. Para el efecto, se buscó definir los aspectos teóricos y técnicos que enmarcan el trabajo y evaluar los problemas que se presentan en el desarrollo del cultivo de papa a través de su respuesta espectral en imágenes de infrarrojo cercano (NIR) de alta resolución obtenidas con el uso de drones o vehículos aéreos no tripulados (VANT). Los resultados obtenidos demuestran que la respuesta espectral permite identificar características de la vegetación y problemas en el cultivo, (Berrío 2015) de tal forma que se evidencia la viabilidad económica de esta herramienta tecnológica como alternativa para pequeños y grandes agricultores que permite optimizar el desarrollo de los sistemas productivos [4]."}
              />
            </div>
          </div>
          <h1 tw="font-bold text-3xl self-start">
            Referencias
          </h1>
          <ol tw="space-y-2">
            <li>
              [1] Pineda Tobón, D. M. <b>Diseño, construcción y evaluación de un fluorímetro y una cámara multiespectral para uso en agricultura y biología.</b> (Doctoral dissertation, Universidad Nacional de Colombia-Sede Medellín).
            </li>
            <li>
              [2] Urbano-Molano, F. A. (2013). <b>Redes de sensores inalámbricos aplicadas a optimización en agricultura de precisión para cultivos de café en Colombia.</b> Journal de Ciencia e Ingenierıa, 5(1), 46-52.
            </li>
            <li>
              [3] Durán Cantillo, E. O. (2019). <b>Análisis de la implementación del internet de las cosas en la agroindustria colombiana para optimizar y aumentar los procesos de producción.</b>
            </li>
            <li>
              [4] Meneses, V. A. B., Téllez, J. M., & Velasquez, D. F. A. (2015). <b>Uso de drones para el análisis de imágenes multiespectrales en agricultura de precisión.</b> @ limentech, Ciencia y Tecnología Alimentaria, 13(1).
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
      <Footer />
    </div>
  )
}
