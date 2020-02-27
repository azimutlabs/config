/**
 * Copyright (c) 2019 Azimut Labs
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 */

'use strict';

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
