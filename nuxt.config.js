module.exports = {
  title: "Vohzd | Full Stack JS Developer",
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "Author", content: "vohzd" },
      { name: "google-site-verification", content: "YFLjJEzwNtdNatFp0w4SBmfHPtVMfcWyD9Pp1eJxzW4" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: "javascript, developer, vue, devops, nuxt, freelance, tutorial, ecommerce, conversion, rate, optimisation" },
      { hid: "description", name: "description", content: "vohzd | Marvellous full-stack developer!" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "canonical", href: "https://vohzd.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Saira+Semi+Condensed|Stylish" }
    ],
    script: [{ src: "http://localhost:1337/libraries/main.js" }]
  },
  loading: { color: "#552a3f" },
  router: {
    base: "/"
  },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap",
    [ "@nuxtjs/google-analytics", { id: "UA-104309082-3" } ]
  ],
  build: {
    optimizeCSS: true
  },
  sitemap: {
    hostname: "https://vohzd.com",
    gzip: true
  },
  axios: {
    baseURL: "/",
    proxyHeaders: false,
    credentials: true
  },
  plugins: [
    "~/plugins/date.js",
  ]
}
