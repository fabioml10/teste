import React, { useState, useEffect } from 'react'
import * as api from './api/apiService'
import Header from './components/Header/Header'
import Pupils from './components/Pupils/Pupils'
import Spinner from './components/spinner/Spinner'
import GradesControl from './components/GradesControl/GradesControl'

export default function App() {

  const [allGrades, setAllGrades] = useState([])
  const [selectedGrade, setSelectedGrades] = useState([])
  const [isModalOpen, setisModalOpen] = useState([])

  useEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades()
      setTimeout(() => {
        setAllGrades(grades)
      }, 2000)
    }
    getGrades()
    // api.getAllGrades().then((grades) => {
    //   setTimeout(() => {
    //     setAllGrades(grades)
    //   })
    // }, 2000)
  }, [])

  const handleDelete = () => {

  }
  const handlePersist = () => {

  }

  return (
    <div className="container">
      <h1 className="center">Conrtole de Notas</h1>
      {/* <Header>Controle de Notas</Header>
      <Pupils grades={grades} /> */}

      {allGrades.length === 0 && <Spinner />}
      {allGrades.length > 0 && <GradesControl grades={allGrades} onDelete={handleDelete} onPersist={handlePersist} />}
    </div>
  )

}
