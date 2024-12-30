import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListaTarefas({ tarefas, onRemoverTarefa, onEditarTarefa, onMarcarConcluida }) {
    const [editar, setEditar] = useState(null);
    const [valoresEditados, setValoresEditados] = useState({});

    const iniciarEdicao = (indice, tarefa) => {
        setEditar(indice);
        setValoresEditados(tarefa);
    }

    const salvarEdicao = (indice) => {
        onEditarTarefa(indice, valoresEditados);
        setEditar(null);
    }

    return (
        <ul className="m-auto border-2 border-blue-800">
            <h3 className="py-2 border-b border-blue-800 font-bold text-center text-xl" >Tarefas:</h3>
                {tarefas.map((tarefa, index) => (
                    <li key={index} className={`p-2 border-b border-blue-800 ${tarefa.concluida ? "bg-green-200" : "bg-blue-200"}`}>
                        {editar === index ? (
                            <div>
                            <input
                              type="text"
                              value={valoresEditados.nome}
                              onChange={(e) =>
                                setValoresEditados((prev) => ({ ...prev, nome: e.target.value }))
                              }
                              className="w-full p-2 rounded border"
                            />
                            <textarea
                              value={valoresEditados.descricao || ''}
                              onChange={(e) =>
                                setValoresEditados((prev) => ({ ...prev, descricao: e.target.value }))
                              }
                              className="w-full mt-2 p-2 rounded border"
                              rows={3}
                              placeholder="Descrição"
                            />
                            <div className="flex gap-2 mt-2">
                              <input
                                type="time"
                                value={valoresEditados.inicio || ''}
                                onChange={(e) =>
                                  setValoresEditados((prev) => ({ ...prev, inicio: e.target.value }))
                                }
                                className="p-2 rounded border"
                              />
                              <input
                                type="time"
                                value={valoresEditados.fim || ''}
                                onChange={(e) =>
                                  setValoresEditados((prev) => ({ ...prev, fim: e.target.value }))
                                }
                                className="p-2 rounded border"
                              />
                            </div>
                            <button
                              onClick={() => salvarEdicao(index)}
                              className="mt-2 p-2 rounded bg-green-500 text-white"
                            >
                              Salvar
                            </button>
                          </div>
                        ) : (
                            <div>
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
                                        className={`w-8 h-8 rounded border-0 text-white ${tarefa.concluida ? "bg-gray-500" : "bg-green-600"}`}
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
                            </div>
                        )}
                    </li>
                ))}

                
            
        </ul>
    );
}

export default ListaTarefas;