/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mue Docs',
  tagline: 'Documentation for the Mue project',
  url: 'https://docs.muetab.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mue', 
  projectName: 'docs',
  onBrokenLinks: 'warn',
  themeConfig: {
    navbar: {
      title: 'Mue',
      logo: {
        alt: 'Mue Logo',
        src: 'https://raw.githubusercontent.com/mue/branding/main/logo/logo_round.png',
      },
      items: [
        {
          to: 'introduction',
          activeBasePath: 'docs',
          label: 'Read Docs',
          position: 'left',
        },
        {
          to: 'support',
          label: 'Get Support',
          position: 'left',
        },
        {
          to: 'https://muetab.com',
          label: 'Visit Website',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Development',
              to: 'development',
            },
            {
              label: 'API',
              to: 'api/introduction'
            },
            {
              label: 'Marketplace',
              to: 'marketplace/introduction'
            },
            {
              label: 'Blog',
              to: 'blog/introduction'
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'ProductHunt',
              href: 'https://www.producthunt.com/posts/mue',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/zv8C9F8',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/getmue',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/muetab'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Source Code',
              href: 'https://github.com/mue/docs',
            },
            {
              label: 'Roadmap',
              href: 'https://github.com/mue/mue/projects/2'
            },
            {
              label: 'Support Us',
              href: 'https://github.com/sponsors/davidjcralph'
            },
            {
              label: 'Issues',
              href: 'https://github.com/mue/docs/issues'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mue Tab`,
    },
    algolia: {
      apiKey: '705e99b3d44f4abdbb186a2910250e67',
      indexName: 'muetab',
      contextualSearch: true
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/mue/docs/edit/main/',
            routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src:
        'https://umami.muetab.com/umami.js',
      async: true,
      defer: true,
      'data-website-id': 
        '1d32454c-49a9-4dab-afb9-1f1dd36da4d9'
    },
  ],
};
