import React, { useState } from 'react'
import InputGroup from './InputGroup'

const Form = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const onChangeHandler = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });

      };

    return (
        <div className='new_user' style={{maxWidth:'786px', margin:'auto'}}>
            <InputGroup
            label="Nom et Prénom"
            type="text"
            name="name"
            onChangeHandler={onChangeHandler}
            errors={errors.name}
            value={form.name}
            />
            <InputGroup
            label="Télephone"
            type="number"
            name="phone"
            onChangeHandler={onChangeHandler}
            errors={errors.phone}
            value={form.phone}
            />
        </div>
  )
}

export default Form