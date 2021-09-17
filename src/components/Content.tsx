//imports
import { GenreResponseProps, MovieProps } from "../App";
import { Header } from "./Header";

import { MovieCard } from "./MovieCard";

// interfaces
interface ContentPros {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({ selectedGenre, movies}: ContentPros) {
  // Complete aqui

  return (
        <div className="container">
          <Header title = {selectedGenre.title} />

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard 
                key ={movie.imdbID} 
                title={movie.Title} 
                poster={movie.Poster} 
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}