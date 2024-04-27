import express, { Express, Request, Response } from 'express';
import { config } from 'config/config';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Okk');
});

app.listen(config.port, () => {
  console.log(`Server working 🔥 ${config.port}`);
});
