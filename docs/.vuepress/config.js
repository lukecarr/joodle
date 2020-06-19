const { sidebarTree } = require("../reference/config");

module.exports = {
  title: "Joodle",
  description: "Documentation for Joodle, a Moodle Web Service API client for Node.js.",
  
  themeConfig: {
    nav: [
      {
        text: "Guide",
        link: "/guide/"
      },
      {
        text: "API Reference",
        link: "/reference/"
      },
      {
        text: "Changelog",
        link: "/changelog.html"
      },
      {
        text: "NPM",
        link: "https://www.npmjs.com/package/joodle"
      }
    ],

    lastUpdated: "Last Updated",

    sidebar: Object.assign({
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [
            "",
            "getting-started",
            "installation",
            "initialization",
            "example-usage",
            "configuration",
            "caching"
          ]
        }
      ],
    }, sidebarTree("Introduction")),

    smoothScroll: true,

    repo: "lukecarr/joodle",
    docsDir: "docs",
    docsBranch: "develop",
    editLinks: true,
    editLinkText: "Help us improve this page!"
  }
};
