import React, { useState } from 'react'
import tw, { css } from 'twin.macro'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Team } from '../components/team'

import { faGavel, faChartLine, faUsers, faMicrochip, faLeaf, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DialogOverlay, DialogContent } from "@reach/dialog"
import VisuallyHidden from "@reach/visually-hidden"
import "@reach/dialog/styles.css"

import Tooltip, { useTooltip, TooltipPopup } from "@reach/tooltip";import "@reach/tooltip/styles.css";


import minAgricultura from '../images/min_agricultura.png'
import corpoica from '../images/Corpoica_logo.png'
import alcaldias from '../images/alcaldias.jpeg'

const Element = ({ icon, letter, color, children }) => {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true) 
  const close = () => setShowDialog(false)
  return (
    <div tw="flex items-center text-white text-3xl" onClick={open}>
      <p tw="rounded-full bg-blue-400 h-12 w-12 flex items-center justify-center text-center">{letter}</p>
      <p tw="text-black">IMAGEN</p>
      <div tw="text-black">
        <FontAwesomeIcon icon={icon} />
      </div>
      <DialogOverlay
        tw="z-30"
        isOpen={showDialog}
        onDismiss={close}
      >
        <DialogContent
        >
          <button className="close-button" onClick={close}>
            <VisuallyHidden>Close</VisuallyHidden> 
            <span aria-hidden>×</span> 
          </button>
          <div tw="flex">
            <div tw="w-1/2 text-center">
              <p>Contexto</p>
            </div>
            <div tw="w-1/2 text-center">
              <p>Actores</p>
              <Tooltip tw="z-30" label="EL ministerio de agricultura blah blah blah">
                <img src={minAgricultura} />
              </Tooltip>
              <Tooltip tw="z-30" label="Las alcaldias blah blah">
                <img src={alcaldias} />
              </Tooltip>
              <Tooltip tw="z-30" label="Las alcaldias blah blah asdasdasdasd lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum">
                <img src={corpoica} />
              </Tooltip>
            </div>
          </div>
        </DialogContent>

      </DialogOverlay>
    </div>
  )
}

function Pestal(props) {
  //const Element = 
  return (
    <div tw="max-w-screen-lg mx-auto flex flex-col items-stretch space-y-2 py-2">
      <Element letter="P" icon={faHandshake} color={tw`bg-pink-400`} />
      <Element letter="E" icon={faChartLine} color="bg-pink-400"/>
      <Element letter="S" icon={faUsers} color="bg-pink-400"/>
      <Element letter="T" icon={faMicrochip} color="bg-pink-400"/>
      <Element letter="E" icon={faLeaf} color="bg-pink-400"/>
      <Element letter="L" icon={faGavel} color="bg-pink-400"/>
    </div>
  )
}

export default function Home() {
  //let title = "DISEÑO DE UN ESPECTROSCOPIO PARA EL ANÁLISIS DE SUELOS Y CULTIVOS"
  let title = "¿Cómo ayudar a los agricultores colombianos a que cuenten con la información suficiente de su cultivo (temperatura, humedad, niveles de nitrógeno, fósforo y potasio) de manera rápida, autónoma y económica, para facilitar técnicas de agricultura sostenible y mejorar su competitividad?"
  const query = graphql`
    query {
      file(relativePath: { eq: "Agroback.png" }) {
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
      <header tw="relative w-full h-64 flex justify-center items-center">
        <div css={[tw`fixed top-0 w-full`, negZ]}>
          <Img tw="fixed top-0 h-64" fluid={data.file.childImageSharp.fluid} fadeIn={true} />
        </div>
        <div tw="absolute w-full h-full bg-black bg-opacity-25" />
        <div tw="w-4/5 z-20 flex flex-col justify-center items-center">
          <p
            tw="font-title font-extrabold text-white text-center text-base md:text-3xl lg:text-2xl xl:text-lg leading-tight"
          >
            {title}
          </p>
          <div tw="w-20 h-2 bg-green-300" />
        </div>
      </header>
      <main tw="bg-gray-100">
        <div tw="h-24 bg-teal-200 flex justify-around items-center">
          <button tw="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">  
            Antecedentes
          </button>
          <button tw="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">  
            Contexto y Actores
          </button>
          <button tw="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">  
            Problema
          </button>
          <button tw="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">  
            Posibles Soluciones
          </button>
        </div>
        <div tw="h-4" />
        <Pestal />
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
