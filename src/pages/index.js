import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={'Home'}
      description='The Mue documentation website'>
      <header className={'hero hero--primary ' + styles.heroBanner}>
        <div className='container'>
          <h1 className='hero__title'>Documentation<br/>For Mue.</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className='button button--outline button--secondary button--lg umami--click--hero-learnmore'
              to={useBaseUrl('introduction')}>
                Learn More
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className='title'>
          <h1>Topics</h1>
        </div> 
        <section className={styles.features}>
          <div className='cards'>
            <Link to={useBaseUrl('introduction')}>
              <div className='card umami--click--topics-intro'>
                <h2>Getting Started</h2>
                <p>Introduction to Mue's documentation.</p>
              </div>
            </Link>
            <Link to={useBaseUrl('api/introduction')}>
              <div className='card umami--click--topics-api'>
                <h2>API</h2>
                <p>Documentation regarding Mue's API for quotes and images.</p>
              </div>
            </Link>
            <Link to={useBaseUrl('marketplace/introduction')}>
              <div className='card umami--click--topics-marketplace'>
                <h2>Marketplace</h2>
                <p>Documentation regarding user-created content on marketplace.</p>
              </div>
            </Link>
            <Link to={useBaseUrl('blog/introduction')}>
              <div className='card umami--click--topics-blog'>
                <h2>Blog</h2>
                <p>Documentation regarding Mue's static "Hugo" blog.</p>
              </div>
            </Link>
           </div>
        </section>
      </main>
    </Layout>
  );
}
