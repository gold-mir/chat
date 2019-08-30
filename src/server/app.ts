import * as express from 'express';
import * as path from 'path';

const app: express.Application = express();

app.use(express.static(path.resolve('dist/client')));

app.get('*', (req: express.Request, res: express.Response): void => {
  console.log('connected')
  res.sendFile(path.resolve('dist/client/index.html'))
})

export default app;

