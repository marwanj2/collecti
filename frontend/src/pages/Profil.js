import axios from 'axios';
import styles from "../components/pages/styles.module.css";
import React,{useState} from 'react'
import { useEffect } from 'react';
import InputGroup from '../component/InputGroup'
<<<<<<< HEAD
import authServices from '../services/auth.services';
import userService from '../services/user.Service';
=======
>>>>>>> 0c25ab19d732ef8d85b06a746bb3c11789006051

const Profil = () => {

  const user = authServices.getCurrentUser();
    const [form, setForm] = useState(user);
    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    const onChangeHandler = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

      const handleUpadate = (e) =>{
        e.preventDefault();
        userService.updatedUser(user._id, {
          name: form.name,
          email: form.email,
          type: form.type,

<<<<<<< HEAD
        }).then(res => {
          setSuccessful(true);
          setMessage(res.data.message);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
      }
  return (
      <div className='container'>
        <h3>Profile </h3>
=======
      return (
      <div className='container' style={{marginLeft:'50px'}} >
        <h3>Profile</h3>
>>>>>>> 0c25ab19d732ef8d85b06a746bb3c11789006051
        <hr/>
        <form onSubmit={handleUpadate }>
        <InputGroup
              label="Numéro de téléphone"
              type="number"
              name="phone"
              value={form.phone}
              disabled
          />
          <InputGroup
<<<<<<< HEAD
              label="Nom et prénom"
              type="text"
              name="name"
              onChangeHandler={onChangeHandler}
              value={form.name } 
          />
          <InputGroup
            label="Email"
            type="text"
            name="email"
            onChangeHandler={onChangeHandler}
            value={form.email}
          />

          <InputGroup
            label="Role"
            type="text"
            name="role"
            value={form.roles.length > 1 ? "ADMIN" : "UTILISATEUR"}
            disabled
          />
            <label> Type </label><br></br>
						<select  classname = {styles.input} name="type"  value ={form.type} onChange={onChangeHandler}>
							<option value="citoyen">Citoyen</option>
							<option value="organisateur">Organisation</option>
						</select>
          <button className="btn btn-success" onClick={handleUpadate}>update</button>
          {successful && 
            <div className="my alert alert-success">
              Profile a été mis à jour avec succès
            </div>}
        </form>
=======
            label="Addresse"
            type="text"
            name="address"
            onChangeHandler={onChangeHandler}
            value={form.Role}
          />
          <button className='btn' style={{border:'1px solid #03c04a',margin:'20px 280px'}} type='submit'>Edit</button>
>>>>>>> 0c25ab19d732ef8d85b06a746bb3c11789006051
      </div>
  )
}

export default Profil