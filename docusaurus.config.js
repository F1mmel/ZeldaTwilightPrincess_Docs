// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const REPO_URL = 'https://github.com/F1mmel/ZeldaTwilightPrincessRemastered';
const DISCORD_URL = 'https://discord.gg/WK8umpGm';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Twilight Princess Remastered',
  tagline: 'Zelda Twilight Princess Remastered is a fan project developed using Unity',
  url: 'https://zelda.fimmel.dev',
  baseUrl: '/ZeldaTwilightPrincess_Docs/',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  baseUrlIssueBanner: false,
  organizationName: 'F1mmel',
  projectName: 'ZeldaTwilightPrincess_Docs',
  deploymentBranch: 'gh-pages',

  plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Twilight Princess Remastered',
        logo: {
          alt: 'Twilight Princess Remastered',
          src: 'img/logo.png',
          height: 32,
          width: 32,
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            label: 'About',
            docId: 'about',
          },
          {
            type: 'doc',
            position: 'left',
            label: 'Docs',
            docId: 'download',
          },
          {
            href: REPO_URL,
            label: 'GitHub',
            position: 'left',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
              { label: 'GitHub', href: REPO_URL },
              { label: 'Discord', href: DISCORD_URL },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        darkTheme: darkCodeTheme,
        defaultLanguage: 'cpp',
      },
    }),
};

module.exports = config;
