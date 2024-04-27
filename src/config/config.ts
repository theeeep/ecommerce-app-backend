import { config as conf } from 'dotenv-safe';

conf();

const _config = {
  port: process.env.PORT,
};
export const config = Object.freeze(_config);
