import { useState } from 'react'
import './components/AdicionarTarefa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import AdicionarTarefa from './components/AdicionarTarefa';
import ListaTarefas from './components/ListaTarefas';



function App() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  
  return (
    <main>
      <div id="container" className="min-w-60 max-w-xl m-auto p-2 rounded border-2 border-blue-800 bg-blue-200 font-poppins">
        <h2 className="mb-4 font-bold text-center text-2xl">Lista de Tarefas</h2>
        <AdicionarTarefa />
        <ListaTarefas />
      </div>
    </main>
  )
}

export default App
