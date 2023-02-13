import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from './config/db.js';

import movieRoutes from './movies/movies.routes.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';

dotenv.config();

connectDB();

const app: Express = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/moviesshelf', movieRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
