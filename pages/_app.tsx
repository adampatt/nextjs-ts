import React, { FC } from 'react';
import { AppProps } from 'next/app';

// eslint-disable-next-line react/function-component-definition
const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);
export default MyApp;
