import { defineConfig } from "@rspress/core"

export default defineConfig({
  root: "src/pages",
  outDir: "build/design",
  base: "/design/",
  themeDir: "src/theme",
  title: "XRAY Design",
  description: "The portable interface standard for XRAY products.",
  route: { cleanUrls: true },
  themeConfig: {
    darkMode: "auto",
    enableAppearanceAnimation: false,
    nav: [
      { text: "Wiki", link: "https://wiki.xraynetwork.io/" },
      { text: "XRAY Design", link: "/" },
      { text: "Components", link: "/components/" },
      { text: "Versioning", link: "/versioning" },
      { text: "Protocol", link: "/protocol/" },
      { text: "XRAY JS", link: "https://wiki.xraynetwork.io/xray-js/" },
      { text: "Cardano Lib", link: "https://wiki.xraynetwork.io/cardano-lib/" },
      { text: "DESIGN.md", link: "https://wiki.xraynetwork.io/design/DESIGN.md" }
    ],
    sidebar: {
      "/": [
        { text: "Design standard", link: "/" },
        { text: "Components", link: "/components/" },
        { text: "Button", link: "/components/button" },
        { text: "Tag / Badge", link: "/components/tag" },
        { text: "Account Avatar", link: "/components/account-avatar" },
        { text: "Asset Row", link: "/components/asset-row" },
        { text: "Balance Card", link: "/components/balance-card" },
        { text: "Payment Form", link: "/components/payment-form" },
        { text: "Versioning", link: "/versioning" },
        { text: "Protocol releases", link: "/protocol/" }
      ]
    }
  }
})
