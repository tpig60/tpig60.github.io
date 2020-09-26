import React from 'react'
import 'twin.macro'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Team } from '../components/team'

export default function Home() {
  let title = "DISEÑO DE UN ESPECTROSCOPIO PARA EL ANÁLISIS DE SUELOS Y CULTIVOS"
  const query = graphql`
    query {
      file(relativePath: { eq: "Agroback.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <>
      <div tw="relative h-64 flex justify-center items-center">
        <Img tw="object-cover w-full h-full" fluid={data.file.childImageSharp.fluid} fadeIn={true}/>
        <div tw="absolute top-0 z-10 h-full w-full bg-black bg-opacity-25"/>
        <div tw="absolute w-4/5 z-20 flex flex-col justify-center items-center">
          <p 
            tw="font-title font-extrabold text-white text-center text-5xl leading-tight"
          >
            {title}
          </p>
          <div tw="w-20 h-2 bg-green-300"/>
        </div>
      </div>
      <div tw="h-24 bg-teal-200"/>
      <Team />

    </>
  )
}
