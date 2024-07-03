
import React from 'react'
import "./CustomModel.css"
import { useSelector } from 'react-redux'

export const CustomModel = ({id , show , setShow}) => {

  const users= useSelector((state) => state.app.users);

  const currentUser = users.filter((ele) => ele.id === id);
  console.log("current user : " , currentUser)
   

  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="text-center fixed">
      <h2>{currentUser[0].name}</h2>
       <h5>{currentUser[0].email}</h5>
       <h4>{currentUser[0].age}</h4>
       <h3>{currentUser[0].gender}</h3>
     <button onClick={() =>setShow(!show)} className='btn btn-success'>Close </button>
      </div>
    </div>
  </div>

  )
}


export default CustomModel;
