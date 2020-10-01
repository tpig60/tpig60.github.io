import { faGavel, faChartLine, faUsers, faMicrochip, faLeaf, faHandshake } from '@fortawesome/free-solid-svg-icons'
import tw from 'twin.macro'

import politico from 'src/images/context/politico.jpg'
import minAgricultura from 'src/images/min_agricultura.png'
import alcaldias from 'src/images/alcaldias.jpeg'
import corpoica from 'src/images/Corpoica_logo.png'
import agrosavia from 'src/images/agrosavia.png'

import economico from 'src/images/context/economico.png'
import agroIndustria from 'src/images/context/economic/agroindustria.jpg'
import bancoAgrario from 'src/images/context/economic/banco-agrario-png.png'
import finagro from 'src/images/context/economic/logo_finagro.png'
import asinfar from 'src/images/context/economic/asinfar.jpg'

import ambiental from 'src/images/context/ambiental.jpg'
import CAR from 'src/images/context/ambiental/Logo-CAR.jpg'
import minAmbiente from 'src/images/context/ambiental/min_ambiente.jpg'

import legal from 'src/images/context/legal.jpg'
import red from 'src/images/context/legal/jovenes_rurales.png'
import ica from 'src/images/context/legal/ica.png'
import secretaria from 'src/images/context/legal/secretaria_rural.jpg'

import tecnologico from 'src/images/context/tecnologico.jpg'
import colciencias from 'src/images/context/tecnologico/colciencias-1.png'
import linalca from 'src/images/context/tecnologico/linalca.jpg'
import UN from 'src/images/context/tecnologico/Logo_UN.jpg'
import sicampo from 'src/images/context/tecnologico/sicampo.jpg'

import social from 'src/images/context/social.jpg'
import gobierno from 'src/images/context/social/social.jpg'
import huerta from 'src/images/context/social/huerta.jpg'
import urbano from 'src/images/context/social/urban.jpg'
import campesino from 'src/images/context/campesino-colombiano-revista.jpg'


export const ElementProps = [
  {
    letter: "P",
    text: "Politico",
    icon: faHandshake,
    colors: {
      main: tw`bg-pink-500`,
      faded: tw`bg-pink-400`
    },
    description: "Existen programas de estado que le permiten conocer a los agricultores el estado de su suelo (Agrosavia). El estado cuenta con programas dirigidos a la agricultura: A toda máquina (especializado en maquinaria y equipos agrícolas), Disminuir pobreza del campo (mejorar la equidad en el campo), Programa de Fomento a la Agricultura (solucionar las causas de la baja productividad agrícola entre ellas: insuficiente capital de trabajo; falta de mecanización y equipamiento; bajo nivel de innovación y transferencia tecnológica a los productores) [1].",
    mainImage: politico,
    images: [
      {
        img: minAgricultura,
        label: "El ministerio de agricultura tiene entre sus funciones fomentar el desarrollo de la agricultura del país, a través programas de inversión tecnológica u otros mecanismo, por lo cual su interés por proyectos de bajo costo que permitan aumentar la economía agrícola del país es constante."
      },
      {
        img: alcaldias,
      },
      {
        img: agrosavia,
        label: "Agrosavia es un actor claro pues en como es mencionan por definición son: La Corporación colombiana de investigación agropecuaria, una entidad pública descentralizada sin ánimo de lucro, de carácter científico y técnico, cuyo propósito es trabajar en la generación del conocimiento científico y el desarrollo tecnológico agropecuario, con el fin de mejorar la competitividad de la producción, la equidad en la distribución de los beneficios de la tecnología, la sostenibilidad en el uso de los recursos naturales, para contribuir a elevar la calidad de vida de la población."
      }
    ]
  },
  {
    letter: "E",
    text: "Económico",
    description: "Agricultores cultivan según los precios de los productos. Además, el desconocimiento del estado del suelo puede disminuir la capacidad productiva. Los cultivos son heterogéneos, por lo cual, los requerimientos hídricos, de fertilizantes e insecticidas pueden variar. Tener un constante monitoreo de los cultivos resulta costoso. En ciertas ocasiones se suelen contratar expertos. Pequeños agricultores no pueden competir contra empresas agroindustriales [5].",
    icon: faChartLine,
    colors: {
      main: tw`bg-yellow-500`,
      faded: tw`bg-yellow-400`
    },
    mainImage: economico,
    images: [
      {
        img: bancoAgrario,
        label: "El banco agrario el cual se encarga a través de rigurosos estudios, invertir y permitir crecer a los agricultores colombianos con programas de financiamiento, de forma que nuevas tecnologías de bajo costo que permitan hacer más provechosa su inversión, lo hace un claro acto."
      },
      {
        img: agroIndustria,
        label: "Las alcaldias de los diferentes municipios y ciudades del país, buscan aumentar su producción a través de la inversión en el sector agrícola de su región, entre otros mecanismos, mediante tecnologías de bajo costo."
      },
      {
        img: finagro,
        label: "Finagro similar al banco banco agrario, también busca constantemente mejorar sus programas de financiación haciendo que sean más eficientes y de mayor impacto a través de la implementación de nuevas tecnologías de bajo costo."
      },
    ]
  },
  {
    letter: "S",
    text: "Social",
    description: "De acuerdo con la última Encuesta Nacional de Situación Nutricional de Colombia, 560.000 niños menores de 5 años sufren de desnutrición crónica en el país y 15.600 padecen desnutrición aguda severa [2]. El 2 ODS implica promover prácticas agrícolas sostenibles a través del apoyo a los pequeños agricultores y el acceso igualitario a la tierra, la tecnología y los mercados. Además, se requiere el fomento de la cooperación internacional para asegurar la inversión en la infraestructura y la tecnología necesaria para mejorar la productividad agrícola [3].",
    icon: faUsers,
    colors: {
      main: tw`bg-red-500`,
      faded: tw`bg-red-400`
    },
    mainImage: social,
    images: [
      {
        img: gobierno,
        label: "El gobierno del colombia sea cual sea, busca constantemente la mejora de la calidad de vida de sus ciudadanos y recuperación de terrenos en manos de grupos ilícitos, factores que a través de inversión tecnológica en el campo se ha comprobado que mejora en el mediano y largo plazo."
      },
      {
        img: huerta,
        label: "Agricultores que disponen sus cultivos en sitios con limitaciones lumínicas e invernaderos. La señora Yuri Ocampo cuenta con un cultivo in-door y ofrecio su terreno para hacer pruebas."
      },
      {
        img: urbano,
        label: "Cultivadores urbanos que tienen huertas e invernadernos en sus casas. El ingeniero Juan Carlos Pérez Naranjo cuenta con una huerta en su balcon, director de la asignatura Agricultura Digital en Balcones en la UN Medellin. "
      }
    ]
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
    mainImage: tecnologico,
    images: [
      {
        img: colciencias,
        label: "Colciencias fomenta muchos proyectos científicos de diferentes áreas, especialmente aquellos del sector agrícola que puedan tener un gran impacto en el país y transformar vidas."
      },
      {
        img: UN,
        label: "La universidad Nacional como entidad pública tiene como compromiso añadir ése valor agregado que favorezca la calidad de vida del país a través de la investigación y desarrollo de tecnologías como aquellas que impactan el sector agrícola del país."
      },
      {
        img: sicampo,
        label: "SICAMPO es un actor interesado en este tipo de solución pues en su visión estan:brindar soluciones integrales al sector agropecuario, ofreciendo productos, servicios y herramientas de gestión que contribuyan a su desarrollo y crecimiento."
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
    mainImage: ambiental,
    images: [
      {
        img: minAmbiente,
        label: "El ministerio de ambiente y desarrollo sostenible es un fuerte promotor del cuidado de suelos en nuestro país, muy interesado en técnicas y metodologías que permitan evitar la erosión y deterioro de estos, causando entre otros factores, también por la agricultura y sistemas de siembra poco adaptados a cuidar los terrenos, por lo que soluciones que permitan mejorar el monitoreo del estado de suelos y permitan realizar recomendación de cuidado para prevenir mayores deterioros, son soluciones clave para su objetivo."
      },
      {
        img: CAR,
        label: "La Corporación Autónoma Regional de Cundinamarca tiene dentro de su Plan de Gestión Ambiental Regional, promover soluciones que permitan mejorar la productividad, eficiencia, manejo, control y monitoreo de cultivos, acciones en las que soluciones de este tipo tienen gran impacto."
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
    mainImage: legal,
    images: [
      {
        img: red,
        label: "La Red Nacional de Jóvenes Rurales, impulsada y respaldada por el Ministerio de Agricultura y Desarrollo Rural, es un escenario de encuentro que busca generar lazos de construcción, liderazgo, identificar problemática, soluciones e intereses de los y las jóvenes en el ámbito rural, por lo que soluciones aplicables a la agricultura siempre son de su interés."
      },
      {
        img: ica,
        label: "El Instituto Colombiano agropecuario, entidad pública perteneciente al Sistema Nacional de Ciencia y Tecnología, adscrita al Ministerio de Agricultura y Desarrollo Rural. Tiene entre sus acciones lograr una producción agropecuaria competitiva, con el fin de aportar al logro de los objetivos de la Apuesta Exportadora de Colombia, mediante mejores sistemas de inspección y control de productos agropecuarios y agrícolas."
      },
      {
        img: secretaria,
        label: "La Secretaría de Agricultura y Desarrollo Rural, que tiene como misión contribuir al desarrollo sostenible, competitivo y equitativo del sector agropecuario y al mejoramiento de la calidad de vida de la población rural del Departamento de Cundinamarca, está interesada en aquellas tecnologías que permitan lograr su misión."
      },
    ]
  }
]