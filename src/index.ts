import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Okk');
});

app.listen(3000, () => {
  console.log('Server working 🔥');
});
