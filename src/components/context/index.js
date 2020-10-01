import React, { useState } from 'react'
import tw, { css } from 'twin.macro'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Team } from 'src/components/team'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DialogOverlay, DialogContent } from "@reach/dialog"
import VisuallyHidden from "@reach/visually-hidden"
import "@reach/dialog/styles.css"

import Tooltip, { useTooltip, TooltipPopup } from "@reach/tooltip";
import "@reach/tooltip/styles.css";

import { Header, Nav } from 'src/components/layout'



import { ElementProps } from './data'

const Element = ({ icon, letter, text, colors, description, mainImage, images }) => {
  const { main, faded } = colors
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  return (
    <>
      <div tw="flex flex-col items-center text-white text-6xl cursor-pointer" onClick={open}>
        <p tw="rounded-full bg-blue-600 h-16 w-16 flex items-center justify-center text-center">{letter}</p>
        <p
          css={[
            tw`text-white font-bold rounded-t-md text-2xl mt-2 py-2 w-full flex-grow flex items-center`,
            faded,
            `
            writing-mode: vertical-rl;
            text-orientation: mixed;
            `
          ]}
        >
          {text}
        </p>
        <div css={[tw`text-white w-24 p-2 rounded-b-md flex justify-center items-center`, main]}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <DialogOverlay
        tw="z-30"
        isOpen={showDialog}
        onDismiss={close}
      >
        <DialogContent
          tw="w-3/5 overflow-y-scroll h-80v rounded-lg"
        >
          <div tw="flex">
            <button className="close-button" onClick={close}>
              <VisuallyHidden>Close</VisuallyHidden>
              <span tw="text-2xl text-gray-700" aria-hidden>×</span>
            </button>
            <p tw="mx-auto font-bold">{text}</p>
          </div>
          <div tw="flex">
            <div tw="w-1/2 text-center">
              <p tw="font-bold mb-4">Contexto</p>
              <div tw="flex justify-center p-4">
                <img tw="rounded-lg" src={mainImage} />
              </div>
              {(Array.isArray(description) && description.map((desc) => <p>{desc}</p>)) || description}
            </div>
            <div tw="w-1/2">
              <p tw="font-bold mt-4 mb-4 text-center">Actores</p>
              <div tw="space-y-4 flex flex-col items-center">
                {
                  images && images.map(({ img, label }) => (
                    label ? (
                      <Tooltip tw="z-30 max-w-md whitespace-normal p-4" label={label}>
                        <img tw="rounded-lg" src={img} />
                      </Tooltip>
                    ) :
                      (
                        <img src={img} />
                      )
                  ))
                }
              </div>
            </div>
          </div>
          <div tw="h-8" />
        </DialogContent>

      </DialogOverlay>
    </>
  )
}

function Pestal() {
  return (
    <div tw="max-w-screen-lg mx-auto flex justify-around items-stretch">
      {ElementProps.map(props => <Element {...props} />)}
    </div>
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
          (*) Haga click sobre cada elemento de la matriz PESTAL, esto desplegará un diálogo. Al posar el mouse encima de cada actor se mostrara más información.
        </p>
        <div tw="h-4" />
        <Pestal />
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
        <div tw="h-32" />
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
