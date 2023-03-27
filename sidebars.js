/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  plexSidebar: [
    {
      type: "category",
      label: "Plex API",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Plex API",
        description:
          "This documentation is generated from the plex open api specificiation file",
        slug: "/plex",
      },
      items: require("./docs/plex/sidebar.js"),
    },
  ],
};

module.exports = sidebars;
