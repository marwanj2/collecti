import React from 'react'
import { Link } from 'react-router-dom'

function MaterialRowDetails({name, price, Id, OnDelete}) {

  return (
    <tr>
    <th>{name}</th>
    <td>{price}</td>
    <td className="gap__actions">
      <span className="badge bg-info">
        <Link to={`/material/${Id}`} className="text-white">
          <i className="fas fa-edit"></i>
        </Link>
      </span>

      <span className="badge bg-danger" onClick={()=>OnDelete(Id)}>
        <i className="fas fa-trash-alt"></i>
      </span>
    </td>
  </tr>
  )
}

export default MaterialRowDetails