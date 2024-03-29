// https://docs.liblab.com/lukeslakemail/plex-api/0.0.3
import React from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./sdk-docs.module.css";

export default function SdkDocs() {
  return (
    <Layout
      title={`SDK Docs`}
      description="Community Made SDK Documentation for Plex"
      noFooter
    >
      <iframe
        className={styles.sdkDocs}
        id="sdk-docs"
        src="https://plex-sdk-docs.vercel.app/typescript/client_sdks"
      />
    </Layout>
  );
}
