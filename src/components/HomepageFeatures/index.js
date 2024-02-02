import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Updated with the Spec",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        API Documentation and SDK for Plex dynamically generated from an{" "}
        <a
          href="https://github.com/LukeHagar/plex-api-spec"
          target="_blank"
          rel="noreferrer"
        >
          OpenAPI Specification
        </a>
        .
      </>
    ),
  },
  {
    title: "Open Source",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        The OpenAPI Specification is fully open source, and everyone is welcome
        to{" "}
        <a
          href="https://github.com/LukeHagar/plex-api-spec/issues"
          target="_blank"
          rel="noreferrer"
        >
          report issues
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/LukeHagar/plex-api-spec/pulls"
          target="_blank"
          rel="noreferrer"
        >
          submit pull requests
        </a>
        .
      </>
    ),
  },
  {
    title: "SDKs",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        The Open API Specification is used to automatically generate SDKs in a
        number of different languages (JavaScript/TypeScript, GO, Python,
        etc...) using{" "}
        <a href="https://www.speakeasyapi.dev" target="_blank" rel="noreferrer">
          the world class OpenAPI Generation platform Speakeasy
        </a>
        .
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
