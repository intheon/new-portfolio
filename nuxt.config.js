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
    '@nuxtjs/markdownit',
    "@nuxtjs/axios",
    //"@marcdiethelm/nuxtjs-countly"
  ],
  loading: { color: "#552a3f" }
  /*
  countly: {
  	url: "http://localhost:32768",
  	app_key: "78b5dad03c4e8ebac440108213c7aed099463ce7"
  }*/
}
