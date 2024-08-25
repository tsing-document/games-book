import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "NES文件", icon: "file", link: "/fc_nes_files/",  activeMatch: "^/fc_nes_files/$" },
  { text: "FC游戏", icon: "games-", link: "/fc_book/",  activeMatch: "^/fc_book/$", },
]);
