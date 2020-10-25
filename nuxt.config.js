module.exports = {
  head: {
    title: "Vohzd | Full Stack JS Developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "identifier-url", name: "identifier-url", content: "https://vohzd.com" },
      { hid: "title", name: "title", content: "Vohzd.com" },
      { hid: "language", name: "language", content: "EN" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "canonical", href: "https://vohzd.com" }
    ]
  },
  css: [
    "~/node_modules/plyr/dist/plyr.css"
  ],
  env: {
    SERVER_ENDPOINT: process.env.SERVER_ENDPOINT ? process.env.SERVER_ENDPOINT : "http://localhost:1337"
  },
  loading: { color: '#2a4b55' },
  buildModules: [
    "@nuxtjs/pwa",
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap",
    ["nuxt-matomo", { matomoUrl: "https://stats.apps.epitrade.io/", siteId: 1 }]
  ],
  markdownit: {
    injected: true,
    breaks: true
  },
  build: {
    optimizeCSS: true
  },
  sitemap: {
    hostname: "https://vohzd.com",
    gzip: true
  },
  plugins: [
    "~/plugins/plyr.js",
    "~/plugins/time-filter.js",
    "~/plugins/fontawesome.js",
    { src:'~/plugins/dragscroll.js', mode: "client" },
  ],
  axios: {
    baseURL: "/",
    proxyHeaders: false,
    credentials: true
  }
}
