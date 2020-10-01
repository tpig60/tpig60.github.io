const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      height: {
        '60v': '60vh',
        '80v': '80vh',
      },
      colors: {
        "pasto": "#9ACD32",
        "amarillo": "#FFFF33",
        "tpi": "#C0F66A"
      },
      fontFamily: {
        "title": ["Lato"],
        sans: [
          "Roboto",
          ...defaultTheme.fontFamily.sans
        ]
      },
    },
  },
  variants: {},
  plugins: [],
}
