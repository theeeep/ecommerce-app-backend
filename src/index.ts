import express, { Express, Request, Response } from 'express';
import { config } from 'config/config';
import rootRouter from 'routes';

const app: Express = express();

app.use('/api', rootRouter);

app.listen(config.port, () => {
  console.log(`🌐 Server working on PORT ${config.port} 🔥`);
});
