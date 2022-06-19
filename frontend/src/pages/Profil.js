import axios from 'axios';
import React,{useState} from 'react'
import InputGroup from '../component/InputGroup'
import Uploadimg from './Uploadimg';

const Profil = () => {
    const [form, setForm] = useState({});
    const onChangeHandler = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };


  return (
      <div className='container'>
        <h3>Profile</h3>

        <hr/>
        <InputGroup
            label="Nom et prénom"
            type="text"
            name="name"
            onChangeHandler={onChangeHandler}
            value={form.name}
        />
        <InputGroup
            label="Téléphone"
            type="number"
            name="phone"
            onChangeHandler={onChangeHandler}
            value={form.phone}
          />
          <InputGroup
            label="Role"
            type="text"
            name="roles"
            onChangeHandler={onChangeHandler}
            value={form.Role}
          />
        <Uploadimg />
      </div>
  )
}

export default Profil