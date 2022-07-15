import { defineConfig } from "vuepress/config";

export default defineConfig({
  base: "/tg-validators/",
  title: "tg-validators",
  host: "0.0.0.0",
  description: "nb",
  themeConfig: {
    sidebar: [
      "/",
      "/installation",
      "/config",
      "/basic-usage",
      "/validators/",
      {
        title: "全部验证器",
        collapsable: false,
        children: [
          "/validators/required",
          "/validators/number",

          "/validators/type",
          // '/validators/string',
          // '/validators/array',
          // '/validators/boolean',
          // '/validators/date',

          "/validators/regexp",

          "/validators/custom",
          "/validators/async"
        ]
      },
      "/register"
    ],
    nav: [{ text: "Home", link: "/" }]
  },
  head: [
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?acf5e587c05111943b8dbafe16067056";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ]
});
