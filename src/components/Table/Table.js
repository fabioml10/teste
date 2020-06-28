import React from 'react'
import Edit from '../Button/Edit'
import Delete from '../Button/Delete'
import Action from '../Button/Action'

export default function Table({ grades, finalGrade }) {

  const handleActionClick = (id, type) => {

  }


  return (
    <table className="striped highlight">
      <thead>
        <tr>
          <th>Aluno</th>
          <th>Disciplina</th>
          <th>Avaliação</th>
          <th>Nota</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {grades.grades.map(({ id, subject, student, type, value, isDeleted }) => {

          return (<tr key={id}>
            <td>{student}</td>
            <td>{subject}</td>
            <td>{type}</td>
            <td>{isDeleted ? "-" : value}</td>
            <td>
              <Action onActionClick={handleActionClick} id={id} type={isDeleted ? 'add' : 'edit'} />
              {!isDeleted && <Action type='delete' onActionClick={handleActionClick} />}
            </td>
          </tr>)
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td><strong>Total:</strong></td>
          <td>{finalGrade}</td>
        </tr>
      </tfoot>
    </table>
  )
}
