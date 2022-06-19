import React, { useEffect, useState } from "react";
import InputGroup from "../component/InputGroup";
import RowDetails from "../component/RowDetails";
import axios from "axios";
import Alert from "../component/Alert";

const Customers = () => {

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  /* delete */
  const OnDelete = (id__)=>{
    if(window.confirm("are you sure to delete this user")){

     axios.delete(`http://localhost:8080/api/users/${id__}`)
     .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
     })
    }
   }

  /* find all users */
useEffect(async () => {
    await axios.get("http://localhost:8080/api/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div className="row p-4">
      <Alert message={message} show={show}/>
    <div className="mt-4">
        <h2>liste des Clients</h2>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nom Prénom</th>
              <th scope="col">Téléphone</th>
              <th scope="col">Montant</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ name, phone, montant, roles, _id }) => (
              <RowDetails
                name={name}
                phone={phone}
                montant={montant}
                roles={roles[0]}
                Id = {_id}
                OnDelete={OnDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers