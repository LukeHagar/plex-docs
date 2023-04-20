/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  plexSidebar: [
    {
      type: "category",
      label: "Plex Media Server API",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Plex Media Server API",
        description:
          "This documentation is generated from an OpenAPI Specificiation File",
        slug: "/plex",
      },
      items: require("./docs/plex/sidebar.js"),
    },
    {
      type: "category",
      label: "Plex TV API",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Plex API",
        description:
          "This documentation is generated from an OpenAPI Specificiation File",
        slug: "/plex-tv",
      },
      items: require("./docs/plex-tv/sidebar.js"),
    },
    {
      type: "category",
      label: "Legacy Markdown",
      collapsible: true,
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Legacy API Markdown",
        description:
          "This documentation is the source markdown data used to create the open API Document",
        slug: "/legacy",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "legacy/plex", // generate sidebar
        },
      ],
    },
  ],
};

module.exports = sidebars;
