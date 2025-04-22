import React, { useState } from 'react'

const InfoForm = ({ tipo: tipoInicial, nome: nomeInicial }) => {
  const [dados, setDados] = useState({
    tipo: tipoInicial,
    nome: nomeInicial
  })

  const atualizar = e => {
    const { name, value } = e.target
    setDados(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <h2>{dados.tipo} {dados.nome}!</h2>
      <hr />
      <input
        name="tipo"
        placeholder="Tipo..."
        value={dados.tipo}
        onChange={atualizar}
      />
      <input
        name="nome"
        placeholder="Nome..."
        value={dados.nome}
        onChange={atualizar}
      />
    </div>
  )
}

export default InfoForm
