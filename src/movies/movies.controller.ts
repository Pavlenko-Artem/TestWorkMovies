import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import Movie from '../models/movies.model.js';
import { valiidateMovieData } from '../utils/validation.js';

// @desc     Create new movies
// @route    POST /api/moviesshelf/movie
// @access   Public
export const createNewMovies = asyncHandler(
  async (req: Request, res: Response) => {
    const valid = valiidateMovieData(req.body);

    if (valid.error) {
      res.status(400);
      throw new Error(`${valid.error.message}`);
    }

    const { title, type, directors, genres, countries, year, description } =
      req.body;

    const movie = await Movie.create({
      title,
      type,
      directors,
      genres,
      countries,
      year,
      description
    });

    res.json({ movie });
  }
);

// @desc     Create new movies
// @route    POST /api/moviesshelf/search/:title
// @access   Public
export const findMovies = asyncHandler(async (req: Request, res: Response) => {
  const movies = await Movie.find({
    title: { $regex: req.params.title, $options: 'i' }
    /** Если поиск через query, то { $regex: req.query.title, $options: 'i' }*/
  });

  if (movies.length === 0) {
    res.status(400);
    throw new Error('The movie was not found');
  }

  res.json({ movies });
});
