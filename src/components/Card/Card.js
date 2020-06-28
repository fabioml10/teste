import React from 'react'
import Table from '../Table/Table'
import Total from '../Total/Total'

export default function Card() {
  return (
    <div className="row">
      <div className="col s12">
        <Table />
        <Total />
      </div>
    </div>
  )
}
