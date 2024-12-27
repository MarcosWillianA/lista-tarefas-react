import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AdicionarTarefa() {
    return (
        <div id="add-tarefa" className="flex flex-col gap-2 p-2 rounded border border-blue-800">
            <label htmlFor="novaTarefa">Nova Tarefa:            
                <input 
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
                    className="w-full mt-2 px-2 outline-none"
                    placeholder="Descrição da tarefa:"
                >
                </textarea>
            </label>
        </div>
    )
}

export default AdicionarTarefa;