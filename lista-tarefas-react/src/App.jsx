import React, { useState, useEffect } from 'react';
import './components/AdicionarTarefa';
import AdicionarTarefa from './components/AdicionarTarefa';
import ListaTarefas from './components/ListaTarefas';



function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
  
      setTarefas((prev) =>
        prev.map((tarefa) => {
          if (tarefa.concluida || tarefa.alarmando || !tarefa.fim) {
            return tarefa;
          }
  
          // Construa uma data completa para o fim da tarefa
          const [horas, minutos] = tarefa.fim.split(':').map(Number);
          const fimTarefa = new Date(agora);
          fimTarefa.setHours(horas, minutos, 0, 0);
  
          // Calcule o tempo restante
          const tempoRestante = fimTarefa - agora;
  
          if (tempoRestante > 0 && tempoRestante <= 5 * 60 * 1000) {
            // Marque a tarefa como "alarmando" antes de disparar o alerta
            tarefa.alarmando = true; 
            alert(`A tarefa "${tarefa.nome}" está a 5 minutos do fim.`);
          }
  
          return tarefa;
        })
      );
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  
  
  

  const adicionarTarefa = (tarefa) => {
    setTarefas((prev) => [
      ...prev, 
      { ...tarefa, concluida: false, alarmando: false },
    ]);
  };

  const removerTarefa = (indice) => {
    setTarefas((prev) => prev.filter((_, i) => i !== indice));
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
        <AdicionarTarefa onAdicionarTarefa={adicionarTarefa}/>
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
