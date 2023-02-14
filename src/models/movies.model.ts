import mongoose from 'mongoose';

export interface IMovie {
  title: string;
  type: 'movie' | 'tvSeries';
  directors: string[];
  genres: string[];
  countries: string[];
  year: number;
  description: string;
}

const movieSchema = new mongoose.Schema<IMovie>(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    directors: { type: [String], required: true },
    genres: { type: [String], required: true },
    countries: { type: [String], required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Movie = mongoose.model<IMovie>('Movie', movieSchema);

export default Movie;
