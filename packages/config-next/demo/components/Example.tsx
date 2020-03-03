import React, { FC, PropsWithChildren } from 'react';

import styles from './Example.module.scss';

type ExampleProps = PropsWithChildren<{}>;

export const Example: FC<ExampleProps> = ({ children }: ExampleProps) => (
  <div className={styles.example}>{children}</div>
);
