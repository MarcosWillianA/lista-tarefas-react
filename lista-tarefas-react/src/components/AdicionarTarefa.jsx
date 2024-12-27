import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AdicionarTarefa() {
    return (
        <div id="add-tarefa" className="flex flex-col gap-2 p-2 rounded border border-blue-800">
            <label htmlFor="novaTarefa">Nova Tarefa:            
                <input 
                    id="novaTarefa"
                    type="text" 
                    className="w-full mt-2 p-2 px-2 outline-none rounded"
                    placeholder="Nome da tarefa:"
                />
            </label>
            <label htmlFor="descricao-tarefa">Detalhes:
                <textarea 
                    name="descricao-tarefa" 
                    id="descricao-tarefa" 
                    rows={5} cols={40}
                    className="w-full mt-2 px-2 outline-none text-sm"
                    placeholder="Descrição da tarefa:"
                >
                </textarea>
            </label>
            <div>Horário: 
                <div id="horario-inicio-fim" className="flex justify-between mt-2 sm:flex-col">
                    <label htmlFor="horario-inicio" className="flex flex-col">Início:
                        <input 
                            type="time" 
                            name="horario-inicio" 
                            id="horario-inicio" 
                            className="sm:w-1/5 p-2 px-2 outline-none rounded"
                            placeholder="00:00"
                        />
                    </label>       
                    
                    <label htmlFor="horario-fim" className="flex flex-col">Fim: 
                        <input 
                            type="time" 
                            name="horario-inicio" 
                            id="horario-fim" 
                            className="sm:w-1/5 p-2 px-2 outline-none rounded"
                            placeholder="00:00"
                        />
                    </label>
                </div>
            </div>
            <button
                type="button"
                className="self-end p-2 rounded border-0 bg-sky-400 hover:bg-sky-600 active:bg-sky-600 text-white"
            >
                Adicionar
            </button>
        </div>
    )
}

export default AdicionarTarefa;