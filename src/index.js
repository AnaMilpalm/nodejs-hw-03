// import express from 'express';
// import pino from 'pino-http';
// import cors from 'cors';
// import { startServer } from './server.js';
// const PORT = 3000;

// const app = express();

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello world!',
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.use(
//   pino({
//     transport: {
//       target: 'pino-pretty',
//     },
//   }),
// );

// app.use(cors());

// startServer();

import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';
import dotenv from 'dotenv';
dotenv.config();

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();
