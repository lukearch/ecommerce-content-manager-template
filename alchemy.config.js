/**@type {import('@alchemyjs/core').Config} */

const config = {
  environments: {
    development: {
      envFilePath: '.env',
    },
    production: {
      ignoreEnvFile: true,
    },
  },
};

module.exports = config;
