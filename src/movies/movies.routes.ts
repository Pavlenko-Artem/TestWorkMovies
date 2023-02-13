import express from 'express';
import { createNewMovies, findMovies, getMovies } from './movies.controller.js';

const router = express.Router();

router.route('/').get(getMovies);
router.route('/search/:title').get(findMovies);
router.route('/movie').post(createNewMovies);

export default router;
