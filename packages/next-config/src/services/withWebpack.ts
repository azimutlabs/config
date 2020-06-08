import { Configuration } from 'webpack';

import { NextConfig } from '../types/NextConfig';
import { NextWebpackOptions } from '../types/NextWebpackOptions';

export const withWebpack = (
  nextConfig: NextConfig,
  webpackConfig: Configuration,
  webpackOptions: NextWebpackOptions,
): Configuration =>
  typeof nextConfig === 'object' && typeof nextConfig.webpack === 'function'
    ? nextConfig.webpack(webpackConfig, webpackOptions)
    : webpackConfig;
