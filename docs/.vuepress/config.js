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
        text: "NPM",
        link: "https://www.npmjs.com/package/joodle"
      }
    ],

    lastUpdated: "Last Updated",

    sidebar: {
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
            "configuration"
          ]
        }
      ],
      "/reference/": [
        {
          title: "API Reference",
          collapsable: false,
          children: [
            ""
          ]
        }
      ]
    },

    smoothScroll: true,

    repo: "lukecarr/joodle",
    docsDir: "docs",
    docsBranch: "develop",
    editLinks: true,
    editLinkText: "Help us improve this page!"
  }
};
