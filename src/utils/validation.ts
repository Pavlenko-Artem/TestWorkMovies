import Joi from 'joi';
import { IMovie } from '../models/movies.model.js';

export const valiidateMovieData = (movie: IMovie) => {
  const movieSchema = Joi.object<IMovie>({
    title: Joi.string().required(),
    type: Joi.string()
      .pattern(/movie|tvSeries/)
      .required(),
    directors: Joi.array().items(Joi.string()).required(),
    genres: Joi.array().items(Joi.string()).required(),
    countries: Joi.array().items(Joi.string()).required(),
    year: Joi.number().min(1900).max(2030).required(),
    description: Joi.string().min(10).max(250).required()
  });

  return movieSchema.validate(movie);
};
