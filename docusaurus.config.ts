import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Book',
  tagline: 'AI-Driven and Spec-Driven Hackathon Book',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // 🔥 Correct GitHub Pages config
  url: 'https://ismail-ahmed-shah.github.io',
  baseUrl: '/my-book/',

  organizationName: 'ISMAIL-AHMED-SHAH', // Your GitHub username
  projectName: 'my-book', // Your repo name

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/ISMAIL-AHMED-SHAH/my-book/tree/main/',
        },

        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/ISMAIL-AHMED-SHAH/my-book/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'My Book',
      logo: {
        alt: 'My Book Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ISMAIL-AHMED-SHAH/my-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{label: 'Intro', to: '/docs/intro'}],
        },
        {
          title: 'Community',
          items: [
            {label: 'Stack Overflow', href: 'https://stackoverflow.com'},
            {label: 'Discord', href: 'https://discord.gg'},
            {label: 'X / Twitter', href: 'https://x.com'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'GitHub', href: 'https://github.com/ISMAIL-AHMED-SHAH/my-book'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Book.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
