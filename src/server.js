import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import contactsRouter from './routes/contacts.js';

import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = Number(getEnvVar('PORT', '3001'));

export const startServer = () => {};
const app = express();

app.use(express.json());
app.use('/contacts', contactsRouter);

app.use(cors());

app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use('*', notFoundHandler);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
