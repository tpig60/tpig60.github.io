import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { DialogOverlay, DialogContent } from "@reach/dialog"
import VisuallyHidden from "@reach/visually-hidden"
import "@reach/dialog/styles.css"

const Image = styled(Img)(({ size, rounded }) => [
  `
    width: ${size}px;
    height: ${size}px;
  `,
  rounded && tw`rounded-full`,
  tw`shadow-md`,
])

function TeamMember({ name, description, img, career }) {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true) 
  const close = () => setShowDialog(false)

  return (
    <>
      <button
        role="dialog"
        onClick={open}
        onKeyDown={open}
        tw="w-full md:w-1/3 lg:w-1/5 flex flex-col p-4 justify-start items-center text-center font-sans"
      >
        <Image rounded size={112} fluid={img.childImageSharp.fluid} />
        <p tw="font-bold text-base">{name}</p>
        <p tw="text-base text-gray-700">{career}</p>
      </button>
      <DialogOverlay
        tw="z-30"
        isOpen={showDialog}
        onDismiss={close}
      >
        <DialogContent
          tw="rounded-md"
        >
          <button className="close-button" onClick={close}>
            <VisuallyHidden>Close</VisuallyHidden> 
            <span aria-hidden>×</span> 
          </button>
          <div tw="flex flex-col items-center">
            <Image size={224} fluid={img.childImageSharp.fluid} />
            <p tw="font-bold text-base">{name}</p>
            <p tw="text-center">{description}</p>
          </div>
        </DialogContent>
      </DialogOverlay>
    </>
  )
}

export function Team() {
  let query = graphql`
    query {
      allMembersJson {
        nodes {
          name
          description
          career
          img {
            childImageSharp {
              fluid(quality: 100, maxWidth: 244, maxHeight: 244) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      defaultImg: file(relativePath: { eq: "default-profile.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 244, maxHeight: 244) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  let data = useStaticQuery(query)
  let members = data.allMembersJson.nodes

  return (
    <>
      <h1 tw="font-title font-bold text-3xl text-center">
        Nuestro Equipo - TPI G60: Sistema de Monitoreo de Cultivos
      </h1>
      <h2 tw="text-center">Profesor Mentor: Jhon Fabio Acuña</h2>
      <div tw="h-4"/>
      <div tw="flex flex-wrap max-w-screen-lg justify-around items-stretch mx-auto">
        {members.map(((props, i) => <TeamMember key={i} {...props} />))}
      </div>
    </>
  )
}