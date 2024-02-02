// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "API Documentation and SDKs for Plex",
  tagline:
    "Open and community sourced API documentation and SDKs for Plex with a kick!",
  favicon: "img/favicon.ico",
  scripts: [
    {
      src: "https://analytics.plygrnd.org/js/script.js",
      async: true,
      defer: true,
      "data-domain": "plexapi.dev",
    },
  ],
  // Set the production url of your site here
  url: "https://plexapi.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lukehagar", // Usually your GitHub org/user name.
  projectName: "plex-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl:
            "https://github.com/LukeHagar/plex-api-spec/blob/main/plex-api-spec-dereferenced.yaml",
          sidebarPath: require.resolve("./sidebars.js"),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/LukeHagar/plex-docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/Open-Graph-Image.png",
      navbar: {
        title: "API Documentation and SDKs for Plex",
        logo: {
          alt: "My Site Logo",
          src: "img/favicon.ico",
        },
        items: [
          { to: "/docs/plex", label: "API", className: "indent" },
          { to: "/docs/legacy", label: "Legacy", className: "indent" },
          { to: "/sdk-docs", label: "SDKs", className: "indent" },
          { to: "/blog", label: "Blog", className: "indent" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "API Documentation",
                to: "/docs/plex",
              },
              {
                label: "SDK Documentation",
                to: "/sdk-docs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php", "java", "powershell"],
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
          variant: "requests",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
          variant: "axios",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
          variant: "httpclient",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
      ],
      announcementBar: {
        id: "announcementBar_1",
        backgroundColor: "red",
        textColor: "white",
        content:
          "This is not an Official Plex.TV Resource and is not built or maintained by Plex. If you have any feedback on the <a href='https://github.com/LukeHagar/plex-docs'>Website</a> or the <a href='https://github.com/LukeHagar/plex-api-spec'>API Specification</a> please let me know!",
      },
      metadata: [
        {
          name: "keywords",
          content:
            "api documentation for plex, sdks for plex, sdk, ts, typescript, plexapi.dev",
        },
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: "B040KPNF7Z",

        // Public API key: it is safe to commit it
        apiKey: "6dd932b0ad77bf1b92efa0ff25023ffe",

        indexName: "plex-vercel",

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          PlexTV: {
            specPath: "static/plex-tv-spec-dereferenced.yaml", // Path to designated spec file
            outputDir: "docs/plex-tv", // Output directory for generated .mdx docs
            template: "api.mustache",
            downloadUrl:
              "https://raw.githubusercontent.com/LukeHagar/plex-api-spec/main/plex-tv-spec-dereferenced.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
              sidebarCollapsed: false,
            },
          },
          PMS: {
            specPath: "static/plex-media-server-spec-dereferenced.yaml", // Path to designated spec file
            outputDir: "docs/plex", // Output directory for generated .mdx docs
            template: "api.mustache",
            downloadUrl:
              "https://raw.githubusercontent.com/LukeHagar/plex-api-spec/main/plex-media-server-spec-dereferenced.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
              sidebarCollapsed: false,
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
