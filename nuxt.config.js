module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ben Smith - Front-end Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keyords', content: 'Javascript, Front-End, Development, Developer, HTML, HTML5, ES6, Vue, VueJS, React, Webpack, Freelance' },
      { hid: 'description', name: 'description', content: 'Bens Homepage! Front End Web Developer for hire. I need food!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Saira+Semi+Condensed' },
    ],
    script: [
      { src: 'https://use.fontawesome.com/92ed6a1d13.js' }
    ]
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#552a3f' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
