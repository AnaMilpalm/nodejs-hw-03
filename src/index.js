import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world!',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

app.use(cors());
