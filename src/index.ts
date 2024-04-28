import express, { Express, Request, Response } from 'express';
import { config } from 'config/config';
import rootRouter from 'routes';
import { errorMiddleware } from 'middlewares/errors';

const app: Express = express();

// --> Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', rootRouter);

app.use(errorMiddleware);

app.listen(config.port, () => {
  console.log(`🌐 Server working on PORT ${config.port} 🔥`);
});
