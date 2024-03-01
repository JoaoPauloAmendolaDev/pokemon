// Importar o Express e o CORS
import express, { Application } from 'express';
import cors from 'cors';
import { connectDb, disconnectDB } from './config';
import httpStatus from 'http-status';

// Criar uma instância do aplicativo Express
const app = express();

// Usar o CORS
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('API online'));

export function init(): Promise<Application> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
// O resto do seu código do servidor...
