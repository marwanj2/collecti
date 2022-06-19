import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import InputGroup from '../component/InputGroup'

function Details() {

  const [form, setForm] = useState({});
  const {id} = useParams();
  const navigate = useHistory()
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8080/api/users/${id}`, form)
    .then(res=>{
      navigate('/customers')
    })
    .catch(err=>setErrors(err.response.data))

  }

  useEffect(async () => {
    await axios.get(`http://localhost:8080/api/users/${id}`).then((res) => {
      setForm(res.data);
    });
  }, []);
  return (
    <div className="container mt-4 col-12 col-lg-4">
        <form onSubmit={onSubmitHandler}>
          <InputGroup
            label="Nom prénom"
            type="text"
            name="name"
            onChangeHandler={onChangeHandler}
            errors={errors.name}
            value={form.name}
          />
          <InputGroup
            label="Téléphone"
            type="number"
            name="phone"
            onChangeHandler={onChangeHandler}
            errors={errors.phone}
            value={form.phone}
          />
          <InputGroup
            label="Role"
            type="text"
            name="roles"
            onChangeHandler={onChangeHandler}
            errors={errors.Role}
            value={form.Role}
          />
          <button className="btn btn-primary" type="submit">Ajouter Client</button>
        </form>
      </div>
  )
}

export default Details