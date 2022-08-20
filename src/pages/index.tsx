import { Fragment } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Frontend Mentor | Time tracking dashboard</title>
      </Head>

      <main>
        <h1>Frontend Mentor | Time tracking dashboard</h1>
      </main>

      <footer>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </Fragment>
  );
};

export default Home;
