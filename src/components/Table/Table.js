import React from 'react'
import Edit from '../Button/Edit'
import Delete from '../Button/Delete'

export default function Table() {
  return (
    <table className="highlight">
      <thead>
        <tr>
          <th>Aluno</th>
          <th>Disciplina</th>
          <th>Avaliação</th>
          <th>Nota</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nome</td>
          <td>Nome da Disciplina</td>
          <td>$0.87</td>
          <td>$0.87</td>
          <td><Edit /></td>
          <td><Delete /></td>
        </tr>
      </tbody>
    </table>
  )
}
