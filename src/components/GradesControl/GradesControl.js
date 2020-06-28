import React from 'react'
import Table from '../Table/Table'

export default function GradesControl({ grades, onDelete, onPersist }) {
  return (
    <div>
      <Table grades={grades} />
    </div>
  )
}
