import React, { useState } from 'react'

const Uploadimg = () => {
    const [selectedImage,setSelectedImage] =  useState(null)

  return (
    <div>
        <h3>upload img</h3>
        { selectedImage && (
            <div>
                <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)}/>
                <br/>
                <button onClick={()=> setSelectedImage(null)}>Remove</button>
            </div>
        )}
            <br/>
            <br/>
            <input type="file" name="myImage"
            onChange={(event) =>{
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0])
            }} />
    </div>
  )
}

export default Uploadimg