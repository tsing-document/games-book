import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "金色童年",
  description: "FC 是金色童年的记忆",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
