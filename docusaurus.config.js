const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "Mue Docs",
  tagline: "Documentation for the Mue project",
  favicon: "img/favicon.ico",

  url: "https://docs.muetab.com",
  baseUrl: "/",

  organizationName: "mue",
  projectName: "docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/mue/docs/edit/main/",
          path: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",

    navbar: {
      title: "Mue",
      logo: {
        alt: "Mue",
        src: "img/favicon.ico",
      },
      items: [
        {
          label: "Read Docs",
          type: "doc",
          docId: "introduction",
          position: "left",
        },
        {
          to: "support",
          label: "Get Support",
          position: "left",
        },
        {
          to: "https://muetab.com",
          label: "Visit Website",
          position: "left",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Development",
              to: "development",
            },
            {
              label: "API",
              to: "api/introduction",
            },
            {
              label: "Marketplace",
              to: "marketplace/introduction",
            },
            {
              label: "Blog",
              to: "blog/introduction",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "ProductHunt",
              href: "https://www.producthunt.com/posts/mue",
            },
            {
              label: "Discord",
              href: "https://discord.gg/zv8C9F8",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/getmue",
            },
            {
              label: "Facebook",
              href: "https://facebook.com/muetab",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Source Code",
              href: "https://github.com/mue/docs",
            },
            {
              label: "Roadmap",
              href: "https://trello.com/b/w7zhS7Hi/mue-tab",
            },
            {
              label: "Support Us",
              href: "https://github.com/sponsors/davidcralph",
            },
            {
              label: "Issues",
              href: "https://github.com/mue/docs/issues",
            },
          ],
        },
      ],
      copyright: `Copyright © 2021-${new Date().getFullYear()} The Mue Authors. Built with Docusaurus.`,
    },

    algolia: {
      appId: "BBPY4O5XZH",
      apiKey: "f91719958835a04e7c72f811a9861176",
      indexName: "muetab",
      contextualSearch: true,
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  plugins: [
    [
      "@dipakparmar/docusaurus-plugin-umami",
      {
        websiteID: "1d32454c-49a9-4dab-afb9-1f1dd36da4d9d",
        analyticsDomain: "umami.muetab.com",
      },
    ],
  ],
};

module.exports = config;
