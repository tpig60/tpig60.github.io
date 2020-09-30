import { faGavel, faChartLine, faUsers, faMicrochip, faLeaf, faHandshake } from '@fortawesome/free-solid-svg-icons'
import tw from 'twin.macro'


import minAgricultura from 'src/images/min_agricultura.png'
import alcaldias from 'src/images/alcaldias.jpeg'
import corpoica from 'src/images/Corpoica_logo.png'

import agroIndustria from 'src/images/context/economic/agroindustria.jpg'
import bancoAgrario from 'src/images/context/economic/banco-agrario-png.png'
import finagro from 'src/images/context/economic/logo_finagro.png'
import asinfar from 'src/images/context/economic/asinfar.jpg'

import CAR from 'src/images/context/ambiental/Logo-CAR.jpg'
import minAmbiente from 'src/images/context/ambiental/min_ambiente.jpg'

import red from 'src/images/context/legal/jovenes_rurales.png'
import ica from 'src/images/context/legal/ica.png'
import secretaria from 'src/images/context/legal/secretaria_rural.jpg'

import colciencias from 'src/images/context/tecnologico/colciencias-1.png'
import linalca from 'src/images/context/tecnologico/linalca.jpg'
import UN from 'src/images/context/tecnologico/Logo_UN.jpg'
import sicampo from 'src/images/context/tecnologico/sicampo.jpg'


export const ElementProps = [
  {
    letter: "P",
    text: "Politico",
    icon: faHandshake,
    colors: {
      main: tw`bg-pink-500`,
      faded: tw`bg-pink-400`
    },
    description: "Existen programas de estado que le permiten conocer a los agricultores el estado de su suelo (Corpoica). El estado cuenta con programas dirigidos a la agricultura: A toda máquina (especializado en maquinaria y equipos agrícolas), Disminuir pobreza del campo (mejorar la equidad en el campo), Programa de Fomento a la Agricultura (solucionar las causas de la baja productividad agrícola entre ellas: insuficiente capital de trabajo; falta de mecanización y equipamiento; bajo nivel de innovación y transferencia tecnológica a los productores).",
    mainImage: undefined,
    images: [
      {
        img: minAgricultura,
        label: "Ministerio de agricultura"
      },
      {
        img: alcaldias,
        label: "Texto alusiva a actor"
      },
      {
        img: corpoica,
        label: "Corpoica"
      }
    ]
  },
  {
    letter: "E",
    text: "Económico",
    description: "Agricultores cultivan según los precios de los productos. Además, el desconocimiento del estado del suelo puede disminuir la capacidad productiva. Los cultivos son heterogéneos, por lo cual, los requerimientos hídricos, de fertilizantes e insecticidas pueden variar. Tener un constante monitoreo de los cultivos resulta costoso. En ciertas ocasiones se suelen contratar expertos. Pequeños agricultores no pueden competir contra empresas agroindustriales.",
    icon: faChartLine,
    colors: {
      main: tw`bg-yellow-500`,
      faded: tw`bg-yellow-400`
    },
    images: [
      {
        img: bancoAgrario,
        label: "Ministerio de agricultura"
      },
      {
        img: agroIndustria,
        label: "Texto alusivo a actor de alcaldias"
      },
      {
        img: finagro,
        label: "Corpoica"
      },
      {
        img: asinfar,
        label: "Corpoica"
      }
    ]
  },
  {
    letter: "S",
    text: "Social",
    description: "De acuerdo con la última Encuesta Nacional de Situación Nutricional de Colombia, 560.000 niños menores de 5 años sufren de desnutrición crónica en el país y 15.600 padecen desnutrición aguda severa. El 2 ODS implica promover prácticas agrícolas sostenibles a través del apoyo a los pequeños agricultores y el acceso igualitario a la tierra, la tecnología y los mercados. Además, se requiere el fomento de la cooperación internacional para asegurar la inversión en la infraestructura y la tecnología necesaria para mejorar la productividad agrícola.",
    icon: faUsers,
    colors: {
      main: tw`bg-red-500`,
      faded: tw`bg-red-400`
    }
  },
  {
    letter: "T",
    text: "Tecnológico",
    description: "En el campo colombiano el uso de la tecnología se enfoca más en la siembra y recolección. Como por ejemplo tractores y sistemas de riego inteligentes. Sin embargo, el uso de drones para detección de plagas y enfermedades, sensores de tipo agrícola, el internet de las cosas y la inteligencia artificial son el futuro.",
    icon: faMicrochip,
    colors: {
      main: tw`bg-blue-500`,
      faded: tw`bg-blue-400`
    },
    images: [
      {
        img: colciencias,
        label: "blah"
      },
      {
        img: UN,
        label: "blah"
      },
      {
        img: linalca,
        label: "blah"
      },
      {
        img: sicampo,
        label: "blah"
      },
    ]
  },
  {
    letter: "A",
    text: "Ambiental",
    description: "El suelo es un recurso no renovable. a raíz de una mala práctica agrícola puede erosionarse. Los nutrientes de este, son de vital importancia para microorganismos y organismos que de él dependan. Pueden ser plantas y/o animales.",
    icon: faLeaf,
    colors: {
      main: tw`bg-green-500`,
      faded: tw`bg-green-400`
    },
    images: [
      {
        img: minAmbiente,
        label: "blah"
      },
      {
        img: CAR,
        label: "blah"
      }
    ]
  },
  {
    letter: "L",
    text: "Legal",
    description: [
      "LEY 29 DE 1990: por la cual se dictan disposiciones para el fomento de la investigación científica y el desarrollo tecnológico ",
      "LEY 101 DE 1993 : Elevar la eficiencia y la competitividad de los productos agrícolas, favorecer el desarrollo tecnológico del agro.",
      "Ley 1731 de 2014: adoptar medidas respecto al  financiamiento de la reactivación del sector agropecuario"
    ],
    icon: faGavel,
    colors: {
      main: tw`bg-teal-500`,
      faded: tw`bg-teal-400`
    },
    images: [
      {
        img: red,
        label: "blah"
      },
      {
        img: ica,
        label: "blah"
      },
      {
        img: secretaria,
        label: "blah"
      },
    ]
  }
]