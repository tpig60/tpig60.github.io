import React from 'react'
import Img from 'gatsby-image'
import { Link, navigate } from 'gatsby'
import tw, { styled } from 'twin.macro'

const Button = tw.button`
  bg-amarillo hover:bg-yellow-400 text-gray-600 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded
`

const StyledNavButton = styled.a(({ to, location }) => [
  tw`bg-amarillo hover:bg-yellow-400 text-gray-600 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded`,
  (location == to) && tw`bg-yellow-400 border-yellow-500`
])

const NavButton = (props) => {
  let { to } = props
  return (
    <StyledNavButton
      {...props}
      onClick={() => {
        navigate(to)
      }}
    />
  )
}

export const Header = ({ data }) => {
  let title = "¿Cómo ayudar a los agricultores colombianos a que cuenten con la información suficiente de su cultivo (temperatura, humedad, niveles de nitrógeno, fósforo y potasio) de manera rápida, autónoma y económica, para facilitar técnicas de agricultura sostenible y mejorar su competitividad?"
  return (
    <header tw="relative w-full h-64 flex justify-center items-center">
      <div tw="fixed top-0 w-full -z-10">
        <Img tw="fixed top-0 h-64" fluid={data.file.childImageSharp.fluid} fadeIn={true} />
      </div>
      <div tw="absolute w-full h-64 bg-black bg-opacity-25" />
      <div tw="w-4/5 z-20 flex flex-col justify-center items-center">
        <p
          tw="font-title font-extrabold text-white text-center text-base md:text-3xl lg:text-2xl xl:text-3xl leading-tight"
        >
          {title}
        </p>
        <div tw="w-20 h-2 bg-pasto" />
      </div>
    </header>
  )
}

export const Nav = () => {
  let location = "/" + window.location.toString().split("/")[3]
  console.log(location)
  return (
    <nav tw="h-16 bg-pasto flex justify-around items-center">
      <NavButton to="/background" location={location}>
        Antecedentes
      </NavButton>
      <NavButton to="/context" location={location}>
        Contexto y Actores
      </NavButton>
      <NavButton to="/problem" location={location}>
        Problema
      </NavButton>
      <NavButton to="/solutions" location={location}>
        Posibles Soluciones
      </NavButton>
    </nav>
  )
}