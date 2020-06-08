export type NextWebpackOptions = {
  readonly buildId: string;
  readonly dev: boolean;
  readonly isServer: boolean;
  readonly defaultLoaders: {
    readonly babel: Record<string, unknown>;
  };
};
