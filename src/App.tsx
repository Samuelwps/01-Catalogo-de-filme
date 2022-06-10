import { useEffect, useState } from "react"

import { api } from "./services/api"

import  Button from "./components/Button"


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

function App() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);


  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then(response => {
      setGenres(response.data)
      console.log(response.data)
    })
    }, [])
    
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div>
      <nav className="sidebar">
        <span>Watch <p>Me</p></span>

        <div className="buttons-container">
          {
            genres.map(genre => {
              <Button     
                key={String(genre.id)}
                title={genre.title}
                iconName={genre.name}
                onClick={() => handleClickButton(genre.id)}
                selected={selectedGenreId === genre.id}
              />
            })
          }
        </div>


      </nav>
    </div>
    
  )
}

export default App