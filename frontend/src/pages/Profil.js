import axios from 'axios';
import React,{useState} from 'react'
import InputGroup from '../component/InputGroup'

const Profil = () => {
    const [form, setForm] = useState({});
    const onChangeHandler = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };


      return (
      <div className='container' style={{marginLeft:'50px'}} >
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
            label="Addresse"
            type="text"
            name="address"
            onChangeHandler={onChangeHandler}
            value={form.Role}
          />
          <button className='btn' style={{border:'1px solid #03c04a',margin:'20px 280px'}} type='submit'>Edit</button>
      </div>
  )
}

export default Profil