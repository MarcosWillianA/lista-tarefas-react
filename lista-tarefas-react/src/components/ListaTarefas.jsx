import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListaTarefas() {
    return (
        <ul className="m-auto border-2 border-blue-800">
            <h3 className="py-2 border-b border-blue-800 font-bold text-center text-xl" >Tarefas:</h3>
                {tarefa}

                <li className="p-2 border-b border-blue-800">
                    <p>
                        <strong>Tarefa:</strong>
                    </p>
                    <p>
                        <strong>Descrição:</strong>
                    </p>
                    <p>
                        <strong>Início:</strong>
                    </p>
                    <p>
                        <strong>Fim:</strong>
                    </p>
                    <div id="botoes" className="flex justify-end gap-2">
                        <button
                            type="button"
                            title="Marcar como concluída"
                            aria-label="marcar como concluída"
                            className="w-8 h-8 rounded border-0 bg-green-600 text-white"
                        >
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button
                            type="button"
                            title="Editar tarefa"
                            aria-label="editar tarefa"
                            className="w-8 h-8 rounded border-0 bg-yellow-500 text-white"
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                            type="button"
                            title="Remover Tarefa"
                            aria-label="remover tarefa"
                            className="w-8 h-8 rounded border-0 bg-red-500 text-white"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                    
                    
                </li>
            
        </ul>
    );
}

export default ListaTarefas;