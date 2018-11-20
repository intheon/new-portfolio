module.exports = {
  head: {
    title: 'Ben Smith - Front-end Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Javascript, Front-End, Development, Developer, HTML, HTML5, ES6, Vue, VueJS, React, NextJS, Webpack, Freelance, Wordpress, eCommerce, CRO, Conversion Rate Optimization' },
      { hid: 'description', name: 'description', content: 'Ben Smith AKA vohzd | Marvellous full-stack JS developer!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Saira+Semi+Condensed' },
    ],
    script: [
      { src: 'https://use.fontawesome.com/92ed6a1d13.js' }
    ]
  },
  modules: [
    [ "@nuxtjs/google-analytics", { id: "UA-104309082-3" } ]
  ],
  loading: { color: '#552a3f' },
  build: {
    extend(config, { isDev, isClient }){
      config.node = { fs: "empty", child_process: "empty" }
    }
  }
}
