import React from 'react'
import Img from 'gatsby-image'
import { Link, navigate } from 'gatsby'
import tw, { styled } from 'twin.macro'

const Button = tw.button`
  bg-amarillo hover:bg-yellow-400 text-gray-600 font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded
`

const StyledNavButton = styled.a(({ to, location }) => [
  tw`bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-green-600 rounded`,
  (location == to) && tw`bg-green-500 border-green-600`
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
  let title = "¿Cómo ayudar a los agricultores rurales y urbanos colombianos a que cuenten con información relevante de su cultivo (temperatura, humedad e intensidad lumunínica) de manera rápida, autónoma y económica, para facilitar técnicas de agricultura sostenible y mejorar su productividad?"
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
        <div tw="w-20 h-2 bg-tpi" />
      </div>
    </header>
  )
}

export const Nav = () => {
  let location = ""
  if (typeof window !== 'undefined') {
    location = "/" + window.location.toString().split("/")[3]
  }
  console.log(location)
  return (
    <nav tw="h-16 bg-tpi flex justify-around items-center">
      <NavButton to="/context" location={location}>
        Contexto y Actores
      </NavButton>
      <NavButton to="/problem" location={location}>
        Problema
      </NavButton>
      <NavButton to="/background" location={location}>
        Antecedentes
      </NavButton>
      <NavButton to="/solutions" location={location}>
        Posibles Soluciones
      </NavButton>
    </nav>
  )
}