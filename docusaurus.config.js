// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Art of Blockchain Programming',
  tagline: 'Master blockchain engineering from first principles.',
  favicon: 'img/CommonprefixLogo.png',

  url: 'http://localhost:3000',
  baseUrl: '/',

  organizationName: 'commonprefix',
  projectName: 'taobp-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'The Art of Blockchain Programming',
        hideOnScroll: false,
        logo: {
          alt: 'CommonPrefix Logo',
          src: 'img/CommonprefixLogo.png',
        },
        items: [],
      },
      footer: undefined,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false, 
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: 'O9N053DR49',
        apiKey: 'ea8bdd6c39274658378794f7b8cb2ab7',
        indexName: 'learning-commonprefix',
        contextualSearch: true,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
      type: 'text/css',
    },
  ],

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
};

export default config;
