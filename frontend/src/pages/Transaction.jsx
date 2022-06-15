
import React from 'react';
import Select from 'react-select'
import './transaction.css'

const options = [
  { value: 'Citoyen', label: 'Citoyen' },
  { value: 'Ouvrier', label: 'Ouvrier de ménage' }
]

const Transaction = () => {
  return (
    <div>
    <form className='form'>
      <div className="numtel">
        <input type="number" minlength="9" maxlength="9" id='input' placeholder='Numéro de téléphone' />
      </div>
      <div className="checkbox-input">
        <div className="checkbox">
          <label for="1" htmlFor="checkbox">
            <input type="Checkbox" maxLength={4} defaultChecked/>
            Bouteille en plastique
          </label>
          <input name='1' id='1' type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label for="2" htmlFor="checkbox">
            <input maxLength={4} type="Checkbox" />
            Canette aluminium
          </label>
          <input name='2' id='2'  type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label for="3" htmlFor="checkbox">
            <input maxLength={4} type="Checkbox" />
            plastique épais
          </label>
          <input name='3' id='3' type="number" placeholder="poids " />
        </div>
        <div className="checkbox">
          <label for='4'  htmlFor="checkbox">
            <input maxLength={4} type="Checkbox" />
            Cartons
          </label>
          <input name='4' id='4' type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label for="5" htmlFor="checkbox">
            <input maxLength={4} type="Checkbox" />
            film plastique
          </label>
          <input name='5' id='5' type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label for="6" htmlFor="checkbox">
            <input maxLength={4} type="Checkbox" />
            bouchon de la bouteille
          </label>
          <input name='6' id='6' type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label maxLength={4} for="7" htmlFor="checkbox">
            <input type="Checkbox" />
            chaises et table
          </label>
          <input name='7' id='7' type="number" placeholder="poids" />
        </div>
        <div className="checkbox">
          <label maxLength={4} for="8" htmlFor="checkbox">
            <input type="Checkbox" />
            Bouteille de cristal
          </label>
          <input name='8' id='8' type="number" placeholder="poids" />
        </div>

      </div>
      <br />

      <Select style="border:1px solid green" defaultValue="Citoyen" options={options} />
     <button type = "button" id= "submitBtn" className = "submitBtn">Ajouter</button>
    </form>
    </div>
  )
}

export default Transaction


















