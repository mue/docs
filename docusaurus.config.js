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
        src: 'https://raw.githubusercontent.com/mue/branding/master/logo/logo_round.png',
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
              label: 'Learn More',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'ProductHunt',
              href: 'https://www.producthunt.com/posts/mue',
            },
            {
              label: 'Discord',
              href: ' https://discord.gg/zv8C9F8',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/getmue',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mue/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mue Tab`,
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
};
