import axios from 'axios'

const API_URL = 'http://localhost:3001/grade'
const GRADE_VALIDATION = [
  {
    id: 1,
    grade_type: 'Exercícios',
    minValue: 0,
    maxValue: 10
  },
  {
    id: 1,
    grade_type: 'Trabalho Prático',
    minValue: 0,
    maxValue: 40
  },
  {
    id: 1,
    grade_type: 'Desafio',
    minValue: 0,
    maxValue: 50
  }
]

async function getAllGrades() {
  const res = await axios.get(API_URL)
  const grades = res.data.grades.map(grade => {
    return {
      ...grade,
      studentLowerCase: grade.student.toLowerCase(),
      subjectLowerCase: grade.subject.toLowerCase(),
      typeLowerCase: grade.type.toLowerCase(),
      isDeleted: false
    }
  })

  let allStudents = new Set()
  grades.forEach(grade => allStudents.add(grade.student))
  allStudents = Array.from(allStudents)

  let allSubjects = new Set()
  grades.forEach(grade => allSubjects.add(grade.subject))
  allSubjects = Array.from(allSubjects)

  let allGradeTypes = new Set()
  grades.forEach(grade => allGradeTypes.add(grade.type))
  allGradeTypes = Array.from(allGradeTypes)

  let maxId = -1
  getAllGrades.forEach(grade => {
    if (grade.id > maxId) {
      maxId = grades.id
    }
  })

  let nextId = grades.length + 1
  const allCombinations = []
  allStudents.forEach(student => {
    allSubjects.forEach(subject => {
      allGradeTypes.forEach(type => {
        allCombinations.push({
          student,
          subject,
          type
        })
      })
    })
  })

  allCombinations.forEach(({ student, subject, type }) => {
    const hasItem = grades.find(grade => {
      return grade.subject === subject && grade.student === student && grade.type === type
    })
    if (!hasItem) {
      grades.push({
        id: nextId++,
        student,
        studentLowerCase: student.toLowerCase(),
        subject,
        subjectLowerCase: subject.toLowerCase(),
        type,
        typeLowerCase: type.toLowerCase(),
        value: 0,
        isDeleted: true
      })
    }
  })

  grades.sort((a, b) => a.typeLowerCase.localCompare(b.typeLowerCase))
  grades.sort((a, b) => a.subjectLowerCase.localCompare(b.subjectLowerCase))
  grades.sort((a, b) => a.studentLowerCase.localCompare(b.studentLowerCase))

  return grades
}

async function insertGrade(grade) {
  const response = await axios.post(API_URL, grade)
  return response.data.id
}

async function updateGrade(grade) {
  const response = await axios.put(API_URL, grade)
  return response.data
}

async function deleteGrade(grade) {
  const response = await axios.delete(`${API_URL}/${grade.id}`)
  return response.data
}

async function getValidationFromGradeType(gradeType) {
  const gradeValidation = await GRADE_VALIDATION.find(item => item.gradeType === gradeType)
  return {
    minValue: gradeValidation.minValue,
    maxValue: gradeValidation.maxValue
  }
}

export { getAllGrades, insertGrade, updateGrade, deleteGrade, getValidationFromGradeType }