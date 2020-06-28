import React, { useState, useEffect } from 'react'
import * as api from './api/apiService'
import Header from './components/Header/Header'
import Pupils from './components/Pupils/Pupils'

export default function App() {

  const [grades, setGrades] = useState([])

  useEffect(() => {
    const fetchGrades = async () => {
      const result = await api.getAllGrades()
      setGrades(result)
      console.log(result)
    }
    fetchGrades()
  }, [])

  return (
    <div className="container">
      <Header>Controle de Notas</Header>
      <Pupils grades={grades} />
    </div>
  )

}
