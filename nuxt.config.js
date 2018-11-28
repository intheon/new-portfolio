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
    ]
  },
  modules: [
    [ "@nuxtjs/google-analytics", { id: "UA-104309082-3" } ],
    "@nuxtjs/axios"
  ],
  loading: { color: '#552a3f' },
  mode: "spa"
}
