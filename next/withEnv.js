module.exports = (nextConfig = {}) => {
  const filterEnvByPrefix = prefix =>
    Object.keys(process.env)
      .filter(n => n.startsWith(prefix))
      .reduce((acc, cur) => ({ ...acc, [cur]: process.env[cur] }), {});

  const { SERVER_PREFIX, PUBLIC_PREFIX } = process.env;

  const {
    serverRuntimePrefix = SERVER_PREFIX || 'NEXT_SERVER_',
    publicRuntimePrefix = PUBLIC_PREFIX || 'NEXT_PUBLIC_',
  } = nextConfig;

  const serverRuntimeConfig = nextConfig.serverRuntimeConfig || {};
  const serverRuntimeEnv = filterEnvByPrefix(serverRuntimePrefix);
  const publicRuntimeConfig = nextConfig.publicRuntimeConfig || {};
  const publicRuntimeEnv = filterEnvByPrefix(publicRuntimePrefix);

  nextConfig.serverRuntimeConfig = {
    ...serverRuntimeConfig,
    ...serverRuntimeEnv,
  };

  nextConfig.publicRuntimeConfig = {
    ...publicRuntimeConfig,
    ...publicRuntimeEnv,
  };

  return nextConfig;
};
