import React from 'react'
import Table from '../Table/Table'

export default function GradesControl({ grades, onDelete, onPersist }) {

  const tableGrades = []
  let currentStudent = grades[0].student
  let currentSubject = grades[0].subject
  let currentGrades = []
  let id = 1

  grades.forEach(grade => {
    if (grade.subject !== currentSubject) {
      tableGrades.push({
        id: id++,
        student: currentStudent,
        subject: currentSubject,
        grades: currentGrades,
      })
      currentSubject = grade.subject
      currentGrades = []
    }

    if (grade.student !== currentStudent) {
      currentStudent = grade.student
    }
    currentGrades.push(grade)
  })

  tableGrades.push({
    id: id++,
    student: currentStudent,
    subject: currentSubject,
    grades: currentGrades,
  })

  return (
    <div>
      {tableGrades.map(table => {
        const finalGrade = grades.reduce((acc, cur) => {
          return acc + cur.value
        }, 0)

        return <Table key={table.id} grades={table} finalGrade={finalGrade} />
      })}
    </div>
  )
}
