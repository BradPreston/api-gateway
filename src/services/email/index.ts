import express from 'express';
import type { Express } from 'express';
import { handleSend } from './actions.js';

const app: Express = express();
app.use(express.json());

app.post("/send", handleSend);

export default app;