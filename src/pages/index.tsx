import React from 'react';

import clsx from 'clsx';

import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function Block({ title, children }) {
  return (
    <div className={clsx("col", styles.card)}>
      <h2 className="text-hilight">{title}</h2>
      {children}
    </div>
  );
}

export default function Index() {
  const ctx = useDocusaurusContext();

  return (
    <Layout description={ctx.siteConfig.tagline}>
      <Head>
        <html className={clsx("container-tp-background")} id={styles.page} />
      </Head>
      <header className={styles.heroBanner}>
        <div className="container">
          <div className="row">
            <Block title="What is this?">
              <p>This is a project to remaster the GameCube version of <i className="text-hilight">Twilight Princess</i> in the Unity Engine, aiming to bring the classic experience to modern platforms with enhanced graphics and gameplay improvements.</p>

              <Link
                className="button button--secondary"
                to="/about">
                Learn more
              </Link>
            </Block>

            <Block title="I want to help">
              <p>We are looking for contributions to make this remaster even better! Your help, whether it's coding, art, or feedback, is highly appreciated.</p>

              <Link
                className="button button--secondary"
                to="/contribute">
                Get started
              </Link>
            </Block>
          </div>
        </div>
      </header>
    </Layout>
  );
}
