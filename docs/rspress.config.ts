import { defineConfig } from "@rspress/core"

export default defineConfig({
  root: "src/pages",
  outDir: "build/design",
  base: "/design/",
  siteOrigin: "https://wiki.xraynetwork.io",
  icon: "https://cdn.xraynetwork.io/favicon.png",
  themeDir: "src/theme",
  title: "XRAY Design",
  description: "The portable interface standard for XRAY products.",
  route: { cleanUrls: true },
  themeConfig: {
    darkMode: "auto",
    enableAppearanceAnimation: false,
    nav: [
      { text: "Components", link: "/components/" },
      { text: "GitHub", link: "https://github.com/xray-network/design" }
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
