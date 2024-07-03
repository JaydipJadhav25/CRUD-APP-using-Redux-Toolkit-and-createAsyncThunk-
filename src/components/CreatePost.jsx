import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { createUser } from '../App/features/userDetails';
import { useNavigate } from 'react-router-dom';

export const CreatePost = () => {
  const[users , setUser] = useState({});
   
  const navigate = useNavigate();

  //  const[value , setValue]  = useState("");
   const dispatch = useDispatch();

   
  

  
const getUserData = (e) =>{
  setUser({...users , [e.target.name] : e.target.value})
  console.log( "user" , users)

}

const handleSubmite = (e) =>{
  e.preventDefault()
  console.log( "data", users)

  dispatch(createUser(users))
  // e.reset();
  // setValue("")
  navigate("/card")

}


  return (
    <div>
      <h1 className='text-center my-3'>Create User </h1>
        <form className='w-50 mx-auto my-5' onSubmit={handleSubmite}>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" name='name' onChange={getUserData}  />

    <label className="form-label">Email address</label>
    <input type="email" className="form-control"  name='email' onChange={getUserData}/>
    
    <label className="form-label">Age</label>
    <input className="form-control"  name='age' onChange={getUserData}/>
  </div>
  
  <div className="form-check">
  <input className="form-check-input" type="radio" name="gender" value="male"  onChange={getUserData} />
  <label className="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="gender" value="female"id="flexRadioDefault2"  onChange={getUserData}/>
  <label className="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>
  <button type="submit" className="btn btn-primary my-4">Submit</button>
</form>
    </div>
  )
}

export default CreatePost;
