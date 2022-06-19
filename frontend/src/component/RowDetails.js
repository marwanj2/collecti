import React from 'react'
import { Link } from 'react-router-dom'

function RowDetails({name, phone, montant, roles, Id, OnDelete}) {

  return (
    <tr>
    <th>{name}</th>
    <td>{phone}</td>
    <td>{montant}</td>
    <td>{roles}</td>
    <td className="gap__actions">
      <span className="badge bg-info">
        <Link to={`/customer/${Id}`} className="text-white">
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

export default RowDetails