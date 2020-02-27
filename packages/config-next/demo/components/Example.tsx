import styles from './Example.module.scss';
import React, { FC, PropsWithChildren } from 'react';

type ExampleProps = PropsWithChildren<{}>;

export const Example: FC<ExampleProps> = ({ children }: ExampleProps) => (
  <div className={styles.example}>{children}</div>
);
