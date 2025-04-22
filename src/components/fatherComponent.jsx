import React from 'react';
import { childrenWithProps } from '../utils/utils';

export default function Pai(props) {
  return (
    <div>
      <h1>
        {props.nome} 
        {props.sobrenome}
      </h1>
      
      <section>
        {childrenWithProps(props)}
      </section>
    </div>
  );
}