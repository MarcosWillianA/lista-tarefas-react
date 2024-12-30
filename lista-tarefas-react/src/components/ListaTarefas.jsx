import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListaTarefas({ tarefas, onRemoverTarefa, onEditarTarefa, onMarcarConcluida }) {
    return (
        <ul className="m-auto border-2 border-blue-800">
            <h3 className="py-2 border-b border-blue-800 font-bold text-center text-xl" >Tarefas:</h3>
                {tarefas.map((tarefa, index) => (
                    <li key={index} className="p-2 border-b border-blue-800">
                        <p>
                            <strong>Tarefa:</strong>{tarefa.nome}
                        </p>
                        <p>
                            <strong>Descrição:</strong>{tarefa.descricao}
                        </p>
                        <p>
                            <strong>Início:</strong>{tarefa.inicio}
                        </p>
                        <p>
                            <strong>Fim:</strong>{tarefa.fim}
                        </p>
                        <div id="botoes" className="flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => onMarcarConcluida(index)}
                                title="Marcar como concluída"
                                aria-label="marcar como concluída"
                                className="w-8 h-8 rounded border-0 bg-green-600 text-white"
                            >
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    const novoNome = prompt("Edite o nome da tarefa:", tarefa.nome) || tarefa.nome;
                                    const novaDescricao = prompt("Edite a descrição:", tarefa.descricao) || tarefa.descricao;
                                    const novoInicio = prompt("Edite o horário de início:", tarefa.inicio) || tarefa.inicio;
                                    const novoFim = prompt("Edite o horário de fim:", tarefa.fim) || tarefa.fim;

                                    onEditarTarefa(index, {
                                        nome: novoNome,
                                        descricao: novaDescricao,
                                        inicio: novoInicio,
                                        fim: novoFim,
                                      });
                                }}
                                title="Editar tarefa"
                                aria-label="editar tarefa"
                                className="w-8 h-8 rounded border-0 bg-yellow-500 text-white"
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            <button
                                type="button"
                                onClick={() => onRemoverTarefa(index)}
                                title="Remover Tarefa"
                                aria-label="remover tarefa"
                                className="w-8 h-8 rounded border-0 bg-red-500 text-white"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </li>
                ))}

                
            
        </ul>
    );
}

export default ListaTarefas;