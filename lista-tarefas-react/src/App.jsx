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
          // Se a tarefa já está alarmando ou foi concluída, não faça nada.
          if (tarefa.concluida || tarefa.alarmando) return tarefa;
  
          if (tarefa.fim) {
            // Construa uma data completa para o fim da tarefa com base no horário da tarefa.
            const [horas, minutos] = tarefa.fim.split(':').map(Number);
            const fimTarefa = new Date(agora);
            fimTarefa.setHours(horas, minutos, 0, 0); // Adicione hora e minuto da tarefa.
  
            // Calcule o tempo restante
            const tempoRestante = fimTarefa - agora;
  
            // Dispare o alerta se faltar menos de 5 minutos.
            if (tempoRestante <= 5 * 60 * 1000 && tempoRestante > 0) {
              alert(`A tarefa "${tarefa.nome}" está a 5 minutos do fim`);
              return { ...tarefa, alarmando: true };
            }
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
