import React, { useEffect, useState } from "react";
import RowDetails from "../component/MaterialRowDetails";
import axios from "axios";
import Alert from "../component/Alert";

const Material = () => {

  const [materials, setmaterials] = useState([]);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);


  /* delete */
  const OnDelete = (id__)=>{
    if(window.confirm("are you sure to delete this material")){

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
    <div className="row p-4">
      <Alert message={message} show={show}/>
    <div className="mt-4">
        <h2>liste des Matériels</h2>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
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
  );
}

export default Material