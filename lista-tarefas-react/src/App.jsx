import { useState } from 'react'
import './components/AdicionarTarefa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import AdicionarTarefa from './components/AdicionarTarefa';
import ListaTarefas from './components/ListaTarefas';



function App() {
  const [tarefas, setTarefas] = useState([]); 

  const adicionarTarefa = (tarefa) => {
    setTarefas((prev) => [
      ...prev, 
      { ...tarefa, concluida: false },
    ]);
  };

  const removerTarefa = (indice) => {
    setTarefas((prev) => prev.filter((_, i) => i !== i));
  } 

  const editarTarefa = (indice, novosDados) => {
    setTarefas((prev) => 
    prev.map((tarefa, i) => (i === indice ? { ...tarefa, ...novosDados } : tarefa ))
    );
  }
  
  const marcarConcluida = (indice) => {
    setTarefas((prev) => 
      prev.map((tarefa, i) => 
        i === indice ? { ...tarefa, concluida: !tarefa.concluida } : tarefa 
      )
    ); 
  }

  return (
    <main>
      <div id="container" className="min-w-60 max-w-xl m-auto p-2 rounded border-2 border-blue-800 bg-blue-200 font-poppins">
        <h2 className="mb-4 font-bold text-center text-2xl">Lista de Tarefas</h2>
        <AdicionarTarefa onAddTarefa={adicionarTarefa}/>
        <ListaTarefas
          tarefas={tarefas}
          onRemoverTarefa={removerTarefa}
          onEditarTarefa={editarTarefa}
          onMarcarConcluida={marcarConcluida}
        />
      </div>
    </main>
  )
}

export default App
