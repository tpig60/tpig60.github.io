import React, { useState } from 'react'
import tw from 'twin.macro'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DialogOverlay, DialogContent } from "@reach/dialog"
import VisuallyHidden from "@reach/visually-hidden"
import "@reach/dialog/styles.css"

import Tooltip from "@reach/tooltip";
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
                <img tw="rounded-lg" src={mainImage} alt={text} />
              </div>
              {(Array.isArray(description) && description.map((desc, i) => <p key={i}>{desc}</p>)) || description}
            </div>
            <div tw="w-1/2">
              <p tw="font-bold mb-4 text-center">Actores</p>
              <div tw="space-y-4 flex flex-col items-center">
                {
                  images && images.map(({ img, label }, i) => (
                    label ? (
                      <Tooltip key={i} tw="z-30 max-w-md whitespace-normal p-4" label={label}>
                        <img tw="rounded-lg" src={img} alt={label}/>
                      </Tooltip>
                    ) :
                      (
                        <img key={i} src={img} alt="Imagen alcaldias"/>
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

export function Pestal() {
  return (
    <div tw="max-w-screen-lg mx-auto flex justify-around items-stretch">
      {ElementProps.map((props, i) => <Element key={i} {...props} />)}
    </div>
  )
}