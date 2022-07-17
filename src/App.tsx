import { useEffect, useState } from "react"
import { api } from "./services/api"                           
import  Button from "./components/Button"
import SideBar from "./components/SideBar"
import Content from "./components/Content"


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  
  useEffect(() => {          
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
      console.log(response.data)
    })
  }, [selectedGenreId]);
    
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>           
      <SideBar selectedGenreId={selectedGenreId}  handleClickButton={handleClickButton}/>
      <Content selectedGenreId={selectedGenreId} selectedGenre={selectedGenre}/>
    </div>
    
  )
}

export default App