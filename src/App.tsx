import { useEffect, useState } from "react"

import { api } from "./services/api"

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

function App() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then(response => {
      setGenres(response.data)
      console.log(response.data)
    })
    }, [])
    

  return (
    <div>
      <nav className="sisdebar">
        <span>Watch <p>Me</p></span>

        <div className="buttons-container">
          {
            genres.map(genre => {
              <     
                key={String(genre.id)}
                title={genre.title}
                iconName={genre.name}
                onClick{() => handleClickButton }
              />
            })
          }
        </div>


      </nav>
    </div>
    
  )
}

export default App