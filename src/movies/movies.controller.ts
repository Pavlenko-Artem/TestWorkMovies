import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import Movie, { IMovie } from '../models/movies.model.js';

// @desc     Get movies
// @route    GET /api/movies
// @access   Public

export const getMovies = asyncHandler(async (req: Request, res: Response) => {
  const movies = await Movie.find();

  res.json(movies);
});

// @desc     Create new movies
// @route    POST /api/moviesshelf/movie
// @access   Public
const enum Types {
  movie = 'movie',
  tvSeries = 'tvSeries'
}

export const createNewMovies = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      title,
      type,
      directors,
      genres,
      countries,
      year,
      description
    }: IMovie = req.body;

    if (type !== Types.movie && type !== Types.tvSeries) {
      res.status(400);
      throw new Error('The movie type should be movie or tvSeries');
    }

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
