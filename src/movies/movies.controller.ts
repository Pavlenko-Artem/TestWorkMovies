import { Request, Response } from 'express';
import Movie from '../models/movies.model.js';

// @desc     Get movies
// @route    GET /api/movies
// @access   Public

export const getMovies = async (req: Request, res: Response) => {
  const movies = await Movie.find();

  res.json(movies);
};

// @desc     Create new movies
// @route    POST /api/moviesshelf/movie
// @access   Public

export const createNewMovies = async (req: Request, res: Response) => {
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
};
