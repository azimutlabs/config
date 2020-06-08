import * as path from 'path';

import { withWebpack } from '../services/withWebpack';
import { NextConfig } from '../types/NextConfig';

export type WithEslintConfig = NextConfig & {
  readonly disableLintForProd?: boolean;
  readonly eslintOptions?: Record<string, unknown>;
};

export function withEslint(nextConfig: WithEslintConfig): WithEslintConfig {
  return {
    ...nextConfig,
    webpack: (webpackOptions, nextOptions) => {
      if (!nextConfig.disableLintForProd || nextOptions.dev) {
        const { eslintOptions = {} } = nextConfig;
        webpackOptions?.module?.rules?.push({
          test: /\.(js|jsx|ts|tsx)$/,
          loader: require.resolve('eslint-loader'),
          exclude: /(node_modules|\.next)/,
          include: path.resolve(process.cwd(), './'),
          options: {
            cache: true,
            ...eslintOptions,
          },
        });
      } else {
        // eslint-disable-next-line no-console
        console.log(`> Disabling linting process for production build phase`);
      }
      return withWebpack(nextConfig, webpackOptions, nextOptions);
    },
  };
}
