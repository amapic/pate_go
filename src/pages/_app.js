import '../index.scss';
import '../App.scss';
import '../style/planet.scss';
import '../style/navbar2.scss';
import '../style/bon_coin.scss';
import '../style/radio.scss';
import '../style/custom.scss';
import '../style/switch.scss';
import 'bootstrap/dist/css/bootstrap.css'

import { motion } from 'framer-motion';
import shortid from 'shortid';
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function MyApp(props) {
  const { Component, pageProps } = props;


  return (
    // <React.Fragment>
    <>
      <Head>
        <title>Dashboard vaccination</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
      </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
