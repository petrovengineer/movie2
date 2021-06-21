export interface IRootState {
  movies: Array<MovieType>
}

export type MovieType = {
  imdbID: string
  Poster: string
  Title: string
  Genre: string
  Actors: string
  Director: string
  Year: string
  [key: string]: string
}

export interface IMovieParams {
  id: string
}

export type ListPropsType<T> = {
  data: Array<T>
}