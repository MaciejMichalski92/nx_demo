import express from 'express';
import * as path from 'path';
import userRouter from './routers/users';
import { endpoints } from './constants';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());
app.use(express.urlencoded());

app.use(endpoints.users, userRouter);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
