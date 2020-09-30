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

const Element = ({ icon, letter, text, colors, description, images }) => {
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
            tw`text-white font-bold rounded-t-md text-2xl mt-2 py-1 w-full flex-grow flex items-center`,
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
              <p tw="h-32">
                <b>Imagen alusiva a contexto politica</b>
              </p>
              {(Array.isArray(description) && description.map((desc) => <p>{desc}</p>) ) || description}
            </div>
            <div tw="w-1/2">
              <p tw="font-bold mb-4 text-center">Actores</p>
              <div tw="space-y-4 flex flex-col items-center">
                {
                  images && images.map(({ img, label }) => (
                    <Tooltip tw="z-30 max-w-md whitespace-normal" label={label}>
                      <img src={img} />
                    </Tooltip>
                  ))
                }
              </div>
            </div>
          </div>
          <div tw="h-8"/>
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
        <div tw="h-4" />
        <Pestal />
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
