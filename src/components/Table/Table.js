import React from 'react'
import Edit from '../Button/Edit'
import Delete from '../Button/Delete'

export default function Table({ grades }) {
  return (
    <table className="striped highlight">
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
        {grades.map(({ id, subject, student, type, value, isDeleted }) => {
          return (<tr key={id}>
            <td>{student}</td>
            <td>{subject}</td>
            <td>{type}</td>
            <td>{value}</td>
            <td><Edit /></td>
            <td><Delete /></td>
          </tr>)
        })}
      </tbody>
    </table>
  )
}
