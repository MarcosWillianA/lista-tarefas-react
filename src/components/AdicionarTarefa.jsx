import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AdicionarTarefa({ onAdicionarTarefa }) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao]  = useState('');
    const [inicio, setInicio] = useState('');
    const [fim, setFim] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome.trim()) {
            onAdicionarTarefa({
                nome,
                descricao: descricao.trim() || null,
                inicio: inicio || null, 
                fim: fim || null,
            });
            setNome('');
            setDescricao('');
            setInicio('');
            setFim('');
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <div id="add-tarefa" className="flex flex-col gap-2 p-2 rounded border border-blue-800">
                <label htmlFor="novaTarefa">Nova Tarefa:            
                    <input 
                        id="novaTarefa"
                        type="text" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full mt-2 p-2 px-2 outline-none rounded"
                        placeholder="Nome da tarefa:"
                    />
                </label>
                <label htmlFor="descricao-tarefa">Detalhes:
                    <textarea 
                        name="descricao-tarefa" 
                        id="descricao-tarefa" 
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
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
                                value={inicio}
                                onChange={(e) => setInicio(e.target.value)}
                                className="sm:w-1/5 p-2 px-2 outline-none rounded"
                                placeholder="00:00"
                            />
                        </label>                           
                        <label htmlFor="horario-fim" className="flex flex-col">Fim: 
                            <input 
                                type="time" 
                                name="horario-inicio" 
                                id="horario-fim" 
                                value={fim}
                                onChange={(e) => setFim(e.target.value)}
                                className="sm:w-1/5 p-2 px-2 outline-none rounded"
                                placeholder="00:00"
                            />
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="self-end p-2 rounded border-0 bg-sky-400 hover:bg-sky-600 active:bg-sky-600 text-white"
                >
                    Adicionar
                </button>
            </div>
        </form>
        
    )
}

export default AdicionarTarefa;