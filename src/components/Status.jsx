import React from 'react'

function Ligado(props) {
  return <h2>{props.nome} está ligado!</h2>
}

function Desligado(props) {
  return <h2>{props.nome} está desligado!</h2>
}

const Status = {
  Ligado,
  Desligado
}

export { Ligado as Ativado, Desligado as Desativado }
export default Status
