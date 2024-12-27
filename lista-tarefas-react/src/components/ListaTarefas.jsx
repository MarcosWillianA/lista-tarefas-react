import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListaTarefas() {
    return (
        <ul className="m-auto border-2 border-blue-800">
            <h3 className="py-2 border-b border-blue-800 font-bold text-center text-xl" >Tarefas:</h3>
            
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
                            className="w-8 h-8 rounded border-0 bg-green-600 text-white"
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                            type="button"
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