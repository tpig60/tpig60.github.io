import React from 'react'
import { Link } from 'gatsby'
import 'twin.macro'

export default function NotFound() {
  return (
    <div tw="p-4 w-full h-full font-title">
      <p tw="font-bold">
        Página no encontrada
      </p>
      <Link to="/" tw="text-blue-400 hover:underline">
        Ir a el índice
      </Link>
    </div>
  )
}