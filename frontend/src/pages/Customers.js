import React, { useEffect, useState } from "react";
import InputGroup from "../component/InputGroup";
import RowDetails from "../component/RowDetails";
import axios from "axios";
import Alert from "../component/Alert";
import userService from "../services/user.Service";

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
        users.filter((user) => user._id != id__)
        setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 4000);
      })
    }
   }
   const fetch = async () =>{
      const res = await userService.getUsers()
      setUsers(res.data.reverse())
    }

  /* find all users */
useEffect(() => {
    fetch()
  }, []);

  useEffect(() => {
      fetch()
    }, [show]);

  return (
    <div className="row p-4">
      <Alert message={"Utilisateur a été supprimé avec succés"} show={show}/>
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