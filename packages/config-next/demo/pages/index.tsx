import { Example } from '../components/Example';
import { NextPage } from 'next';
import React from 'react';
import './index.scss';

const Home: NextPage = () => (
  <Example>
    <div className="plain-class">AAAA</div>
  </Example>
);

export default Home;
