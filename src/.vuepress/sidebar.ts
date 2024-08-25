import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  {
    "/fc_book/":
    [
      {
        text: "FC游戏",
        prefix: "/fc_book/",
        link: "/fc_book/",
        icon: "games-",
        collapsible: true,
        expanded: false,
        children: [
          {
            text: "冒险岛系列",
            prefix: "/fc_book/",
            collapsible: true,
            expanded: false,
            children: [
              "generation",
            ],
          }
        ]
      }
    ]
  }
);