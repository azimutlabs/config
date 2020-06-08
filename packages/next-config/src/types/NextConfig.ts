import { Configuration } from 'webpack';

import { NextWebpackOptions } from './NextWebpackOptions';

type NextConfigBase = {
  readonly poweredByHeader?: boolean;
  readonly generateEtags?: string;
  readonly distDir?: string;
  readonly assetPrefix?: string;
  readonly pageExtensions?: readonly string[];
  readonly env?: Record<string, string>;
  readonly devIndicators?: {
    readonly autoPrerender: boolean;
  };
  readonly onDemandEntries?: {
    readonly maxInactiveAge?: number;
    readonly pagesBufferLength?: number;
  };
  readonly typescript?: {
    readonly ignoreBuildErrors?: boolean;
  };
} & {
  readonly webpack?: (config: Configuration, options: NextWebpackOptions) => Configuration;
  readonly webpackDevMiddleware?: (config: Configuration) => Configuration;
  readonly generateBuildId?: () => string | Promise<string>;
} & Record<string, unknown>;

type NextConfigServerless = NextConfigBase & {
  readonly target?: 'serverless';
};

type NextConfigServer = NextConfigBase & {
  readonly target?: 'server';
  readonly compress?: boolean;
  readonly publicRuntimeConfig?: Record<string, unknown>;
  readonly serverRuntimeConfig?: Record<string, unknown>;
};

export type NextConfig = NextConfigServer | NextConfigServerless;
