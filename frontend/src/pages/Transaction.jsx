
import React, { useState } from 'react';
import userService from '../services/user.Service';
import authServices from '../services/auth.services';
import './transaction.css'
import { setUncaughtExceptionCaptureCallback } from 'process';
import materialsService from '../services/materials.service';
import { useEffect } from 'react';

const Transaction = (props) => {

  const currentUser = authServices.getCurrentUser()
  const [mat, setMat] = useState()
  const [poids, setPoids] = useState([]);
  const [label, setLabel] = useState([]);
  const [phone, setPhone] = useState(0);
  const [mapped, setMapped] = useState(0)
  const [valider, setValider] = useState(false)
  const [success, setSuccess] = useState(false)
  const [msg, setMsg] = useState('')


  const handleTrns = async (e) => {
    e.preventDefault()
    const repere={
      1: 600,
      2: 1100,
      3: 600,
      4: 50,
      5: 300,
      6: 600,
      7: 800,
      8: 600
      }
    setMapped(poids
      .filter((v, i, a) => a.findLastIndex(v2 => (v2.id === v.id)) === i)
      .map(item => ({ [item.id]: item.quantity * repere[item.id] }))
      .reduce((total, num)=> {return total + parseInt(Object.values(num))}, 0)
      )
      if(phone !=0){
        setValider(true)
      }else{
        setMsg("Veuillez entrer un numéro de téléphone")
        setTimeout(()=>{
          setMsg('')
        }, 2000) 
      } 
}
    useEffect(()=>{
      if(phone !=0){

        userService.transaction(currentUser.id,{"montant":mapped,"phone":phone})
        .then(res => {
          console.log(res)
          setMsg("Transaction effectuée avec succès")
          setSuccess(true)
          setTimeout(()=>{
            props.history.push('/transaction')
          }, 2000) 
        }).catch(err => {
          console.log(err)
          setMsg(err.response.data)
          setSuccess(false)
          setTimeout(()=>{
            setMsg('')
          }, 2000) 
        })
    }
    }, [valider])



  return (
    <div>
    <form className='form' onSubmit={handleTrns}>
      <div className="numtel">
        <input onChange={(e) => setPhone(e.target.value) } type="number" minlength="9" maxlength="9" id='input' placeholder='Numéro de téléphone' />
      </div>
      <div className="checkbox-input">
        <div className="checkbox">
          <label for="1" htmlFor="checkbox">
            <input onChange={(e)=> {setLabel([...label, {id : '1'}]);}} type="Checkbox" maxLength={4} />
            Bouteille en plastique
          </label>
          <input onChange = {(e)=> {setPoids([...poids, {id : '1', quantity : e.target.value}])}} name='1' id='1' type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label for="2" htmlFor="checkbox">
            <input onChange={(e)=> {setLabel([...label, {id : '2'}])}} maxLength={4} type="Checkbox" />
            Canette aluminium
          </label>
          <input onChange = {(e)=> {setPoids([...poids, {id : '2', quantity : e.target.value}])}} name='2' id='2'  type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label for="3" htmlFor="checkbox">
            <input onChange={(e)=> {setLabel([...label, {id : '3'}])}}maxLength={4} type="Checkbox" />
            plastique épais
          </label>
          <input onChange = {(e, id)=> {setPoids([...poids, {id : '3', quantity : e.target.value}])}}name='3' id='3' type="number" placeholder="poids " />
        </div>
        <div className="checkbox">
          <label for='4'  htmlFor="checkbox">
            <input onChange={(e)=> {setLabel([...label, {id : '4'}]);}}maxLength={4} type="Checkbox" />
            Cartons
          </label>
          <input onChange = {(e, id)=> {setPoids([...poids, {id : '4', quantity : e.target.value}])}} name='4' id='4' type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label for="5" htmlFor="checkbox">
            <input onChange={(e)=> {setLabel([...label, {id : '5'}]);}} maxLength={4} type="Checkbox" />
            film plastique
          </label>
          <input onChange = {(e, id)=> {setPoids([...poids, {id : '5', quantity : e.target.value}])}} name='5' id='5' type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label for="6" htmlFor="checkbox">
            <input onChange={(e)=> {setLabel([...label, {id : '6'}]);}} maxLength={4} type="Checkbox" />
            bouchon de la bouteille
          </label>
          <input onChange = {(e, id)=> {setPoids([...poids, {id : '6', quantity : e.target.value}])}} name='6' id='6' type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label maxLength={4} for="7" htmlFor="checkbox">
            <input onChange={(e)=> {setLabel([...label, {id : '7'}]);}} type="Checkbox" />
            chaises et table
          </label>
          <input onChange = {(e, id)=> {setPoids([...poids, {id : '7', quantity : e.target.value}])}} name='7' id='7' type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label maxLength={4} for="8" htmlFor="checkbox">
            <input onChange={(e)=> {setLabel([...label, {id : '8'}]);}} type="Checkbox" />
            Bouteille de cristal
          </label>
          <input onChange = {(e, id)=> {setPoids([...poids, {id : '8', quantity : e.target.value}])}} name='8' id='8' type="number" placeholder="poids" />
        </div>

      </div>
      <br />
     <button type="submit" id="submitBtn" className = "submitBtn">Ajouter</button>
     {valider &&
       success ?
        <div className="alert alert-success">{msg}</div>
      :
        <div className="alert alert-danger">{msg}</div>
      }
    </form>
    </div>
  )
}

export default Transaction


















