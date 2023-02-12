import express from 'express';
import { createNewMovies, getMovies } from './movies.controller.js';

const router = express.Router();

router.route('/').get(getMovies);
router.route('/movie').post(createNewMovies);

export default router;
