import express from 'express';
import { createNewMovies, findMovies } from './movies.controller.js';

const router = express.Router();

router.route('/search/:title').get(findMovies);
/** Для передачи параметров через query путь будет ('/search/? */
router.route('/movie').post(createNewMovies);

export default router;
