import React from 'react'

export default function Action({ id, type, onActionClick }) {
  const handleIconClick = () => {
    onActionClick(id, type)
  }
  return (
    <div>
      <i className="material-icons" onClick={handleIconClick}>{type}</i>
    </div>
  )
} 
