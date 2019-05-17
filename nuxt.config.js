module.exports = {
  head: {
    title: "Ben Smith - Full Stack Developer",
    meta: [
      { charset: "utf-8" },
      { name: "Author", content: "Ben Smith AKA vohzd" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "YFLjJEzwNtdNatFp0w4SBmfHPtVMfcWyD9Pp1eJxzW4" },
      { name: "keywords", content: "javascript, developer, vue, devops, nuxt, freelance, tutorial, ecommerce, conversion, rate, optimisation" },
      { hid: "description", name: "description", content: "Ben Smith AKA vohzd | Marvellous full-stack developer!" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "canonical", href:"https://vohzd.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Saira+Semi+Condensed|Stylish" },
    ]
  },
  modules: [
    [ "@nuxtjs/google-analytics", { id: "UA-104309082-3" } ],
    "@nuxtjs/axios"
  ],
  loading: { color: "#552a3f" },
  mode: "spa"
}
