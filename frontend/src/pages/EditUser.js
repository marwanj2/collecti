import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Form from '../component/Form'
import './edituser.css'

const EditUser = () => {

    const [errors, setErrors] = useState({});
    const {id} = useParams();
    const navigate = useHistory()

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8080/api/users/${id}`)
        .then(res=>{
            navigate('/customers')
        })
        .catch(err=>setErrors(err.response.data))

    }

  return (
    <main id="site-main">
    <div className="container">
        <div className="box-nav d-flex justify-between">
           <div className="filter">
               <a href="/layout/cutomers"><i className="fas fa-angle-double-left"></i> All Users</a>
           </div>
        </div>
        <div className="form-title text-center">
            <h2 className="text-dark">Update User</h2>
            <span className="text-light" style={{color:'black'}}>Use the below form to Update an account</span>
        </div>
        <form onSubmit={onSubmitHandler}>
            <Form/>
            <div className='form-group'>
                <button type='submit' className='btn text-dark update'>Save</button>
            </div>
        </form>
    </div>
</main>
  )
}

export default EditUser