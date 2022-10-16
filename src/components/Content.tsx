import MovieCard from "./MovieCard";
import { useEffect, useState } from "react"
import { api } from "../services/api"

interface MovieProps{
  Genre_id: number;
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


interface ContentProps{
  selectedGenreId: number;
  selectedGenre:GenreResponseProps;
}



function Content({selectedGenreId, selectedGenre} :ContentProps ) {

  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>("/movies").then(response => {
      const data = response.data
      const filter = data.filter((item) => {
        return item.Genre_id === selectedGenreId
      })
      
      setMovies(filter);
    })
    }, [selectedGenreId])

  return(
    <div className="container">
        <header>
          <span className="category">Categoria:</span><span className="spanGenre">{selectedGenre.title}</span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} title={movie.Title} 
              poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value}/>        
            ))}
          </div>
        </main>
      </div>

  );
}

export default Content