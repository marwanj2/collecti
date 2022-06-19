import React, {useState} from 'react'
import InputGroup from '../component/InputGroup'
import './compte.css'

const Compte = () => {
    const [form, setForm] = useState({});
    const onChangeHandler = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });

      };

    const name = "userName"
    const solde = "userSolde"
  return (
    <div className='container'>
        <h2>Salut {name}</h2>
        <h3>Votre solde:
            <span>{solde}</span>
        </h3>
        <h4>Tu peux transférer d'argent vers quelqu'un</h4>
        <div className='inputaveclabel'>
        <InputGroup
        label="Numéro du personne"
        type="number"
        name="solde"
        onChangeHandler={onChangeHandler}
        />
        <InputGroup
        label="Montant"
        type="number"
        name="montant"
        onChangeHandler={onChangeHandler} />
        </div>
        <button className='btn' type="submit">Envoyer</button>
    </div>
  )
}

export default Compte