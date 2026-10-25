import express from 'express';
import type { Express } from 'express';
import cors from 'cors'

import emailRoutes from './routes/emailRoutes.js';

const app: Express = express();
app.use(cors())
app.use(express.json());

app.use("/email", emailRoutes);

export default app;