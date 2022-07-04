import { memo } from "react";

import { MovieCard } from "./MovieCard";

import { GenreResponseProps } from "./SideBar";

import "../styles/content.scss";

export interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function ContentComponent({ selectedGenre, movies }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export const Content = memo(ContentComponent, (prevProps, nexProps) => {
  return (
    Object.is(prevProps.selectedGenre, nexProps.selectedGenre) &&
    Object.is(prevProps.movies, nexProps.movies)
  );
});
