import './index.scss';

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import React from 'react';

import { Example } from '../components/Example';

const Styled = styled.a`
  padding: 15px;
  background: black;
`;

const Home: NextPage = () => (
  <>
    <Styled />
    <div
      css={css`
        margin: 15px;
        padding: 100px;
        background: green;
      `}
    />
    <Example>
      <div className="plain-class">AAAA</div>
    </Example>
  </>
);

export default Home;
