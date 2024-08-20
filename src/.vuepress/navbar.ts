import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "FC游戏NES文件", icon: "games-", link: "/fc_nes_files/",  activeMatch: "^/fc_nes_files/$",  }
]);
