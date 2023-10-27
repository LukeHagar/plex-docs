// https://docs.liblab.com/lukeslakemail/plex-api/0.0.3
import React from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./sdk-docs.module.css";

export default function SdkDocs() {
  return (
    <Layout
      title={`SDK Docs`}
      description="Community Made Plex Media Server SDK Documentation"
    >
      <iframe
        className={styles.sdkDocs}
        id="sdk-docs"
        src="https://docs.liblab.com/lukeslakemail/plex-api/0.0.3"
      />
    </Layout>
  );
}
