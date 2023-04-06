import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Updated with the Spec",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        API Documentation dynamically generated from an{" "}
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
        The OpenAPI Specification is fully open source, and everyone is welcome{" "}
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
    title: "Potential for SDKs",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        The Open API Specification can be used to generate SDKs in a number of
        different languages (JS/TS, GO, Python, Powershell) using existing{" "}
        <a
          href="https://openapi-generator.tech"
          target="_blank"
          rel="noreferrer"
        >
          time tested tools
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
