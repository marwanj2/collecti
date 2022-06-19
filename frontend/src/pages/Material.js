import React, { useEffect, useState } from "react";
import RowDetails from "../component/MaterialRowDetails";
import axios from "axios";
import Alert from "../component/Alert";
import { Link } from "react-router-dom";

const Material = () => {

  const [materials, setmaterials] = useState([]);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  /* delete */
  const OnDelete = (id__)=>{
    if(window.confirm("Etes vous sur de supprimer ce matériel?")){

     axios.delete(`http://localhost:8080/api/materials/${id__}`)
     .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
     })
    }
   }

  /* find all materials */
useEffect(async () => {
    await axios.get("http://localhost:8080/api/materials").then((res) => {
      setmaterials(res.data);
    });
  }, []);
  return (
    <div className="c" style={{width:'90%'}}>
      <div className="box-nav d-flex justify-between" style={{marginLeft:'38px', fontSize:'20px', borderRadius:'12px'}}>
          <Link to='/material' className="bg-white" >
             <span className="text-success" >Ajouter matériel<i className="fas fa-user"></i></span>
          </Link>
      </div>
    <div className="row p-4">
      <Alert message="Matériel supprimer avec succées" show={show}/>
      <div className="col-12 col-lg-7">
      <div className="col-12 col-lg-3 w-100">
        <table className="table">
          <thead className="bg-dark text-white" >
            <tr>
              <th scope="col">Nom des matériels</th>
              <th scope="col">Prix</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {materials.map(({ price, name, _id }) => (
              <RowDetails
                name={name}
                price={price}
                Id = {_id}
                OnDelete={OnDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Material