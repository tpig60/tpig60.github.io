import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { DialogOverlay, DialogContent } from "@reach/dialog"
import VisuallyHidden from "@reach/visually-hidden"
import "@reach/dialog/styles.css"

const Image = styled(Img)(() => [
  `
    min-width: 224px;
    min-height: 224px;
  `,
  tw`rounded-md shadow-md`,
])

function TeamMember({ name, img }) {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true) 
  const close = () => setShowDialog(false)

  return (
    <div>
      <div 
        onClick={open}
        tw="flex flex-col p-4 justify-center items-center text-center font-sans"
      >
        <Image fluid={img.childImageSharp.fluid} />
        <p>{name}</p>
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
          <p>Hello there. I am a dialog</p>
        </DialogContent>
      </DialogOverlay>
    </div>
  )
}

export function Team() {
  let query = graphql`
    query {
      allMembersJson {
        nodes {
          name
          description
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
  console.log(members)

  return (
    <>
      <p tw="font-title font-bold text-3xl text-center">
        Nuestro Equipo
      </p>
      <div tw="flex flex-wrap max-w-screen-lg justify-around items-center mx-auto">
        {members.map(((props, i) => <TeamMember key={i} {...props} />))}
      </div>
    </>
  )
}