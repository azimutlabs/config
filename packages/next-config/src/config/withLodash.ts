import { withWebpack } from '../services/withWebpack';
import { NextConfig } from '../types/NextConfig';

export type WithLodashConfig = NextConfig & {
  readonly lodashWebpackPluginOptions?: Record<string, unknown>;
};

export function withLodash(nextConfig: WithLodashConfig): WithLodashConfig {
  return {
    ...nextConfig,
    webpack: (webpackOptions, nextOptions) => {
      const { lodashWebpackPluginOptions } = nextConfig;
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
        webpackOptions?.plugins?.push(
          new LodashModuleReplacementPlugin(lodashWebpackPluginOptions),
        );
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(`> Can not find 'lodash-webpack-plugin'. Is it installed?`);
      }
      return withWebpack(nextConfig, webpackOptions, nextOptions);
    },
  };
}
