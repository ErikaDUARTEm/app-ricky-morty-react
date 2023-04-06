import Characteres from '@/components/Characteres';
import '../styles/index.css';
import {useState} from 'react';

function App() {
  const [characteres, setcharacteres] = useState(null);

  const reqApi = async() => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()
    setcharacteres(characterApi.results);
  }
  return (
     <div className='App'> 
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
      </header>
      <Characteres characteres={characteres}/>
      <img src="https://raw.githubusercontent.com/ratasi/rick-morty/master/src/img/rick-morty.png" alt="Rick & Morty" className="img-home"/>
      <button onClick={reqApi} className='btn-search'>
        Buscar Personajes
      </button>
      </div>
  )
  
}
export default App;