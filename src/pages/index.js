import React, { useState } from 'react'
import tw, { css } from 'twin.macro'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Team } from '../components/team'
import { Header, Nav } from '../components/layout'

export default function Home() {
  //let title = "DISEÑO DE UN ESPECTROSCOPIO PARA EL ANÁLISIS DE SUELOS Y CULTIVOS"
  let title = "¿Cómo ayudar a los agricultores colombianos a que cuenten con la información suficiente de su cultivo (temperatura, humedad, niveles de nitrógeno, fósforo y potasio) de manera rápida, autónoma y económica, para facilitar técnicas de agricultura sostenible y mejorar su competitividad?"
  const query = graphql`
    query {
      file(relativePath: { eq: "header/Agroback.png" }) {
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
  let negZ = css`
    z-index: -2;
  `

  return (
    <div tw="font-sans">
      <Header data={data} />
      <Nav />
      <main tw="bg-gray-100">
        <div tw="h-4" />
        <Team />
        <div tw="h-4" />
        <div tw="w-4/5 md:w-3/5 xl:w-2/5 mx-auto flex flex-wrap justify-center">
          <Img tw="w-1/2" fluid={data.tpi.childImageSharp.fluid} />
          <Img tw="w-1/2" fluid={data.escudo.childImageSharp.fluid} />
        </div>
        <div tw="h-4" />
      </main>
      <footer tw="h-32 bg-teal-200">
        <a href='https://www.freepik.com/photos/people'>People photo created by freepik - www.freepik.com</a>
      </footer>
    </div>
  )
}
