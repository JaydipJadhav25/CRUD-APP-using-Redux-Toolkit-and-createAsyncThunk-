import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../App/features/userDetails';


export const UpdateUser = () => {
  const { id} = useParams();
  const[updateState , setUpdateState] = useState()

  const dispatch = useDispatch();

  const navigate = useNavigate();
  


 


    console.log("id " , id)
    const {users , loading} = useSelector(s => s.app);


   

   useEffect( () =>{

    if(id){

      const user =  users.filter((ele) => ele.id === id);
      setUpdateState(user[0]);

    }

   },[])


  //  console.log("user : " , updateState)

  function newDatafun(e){
    setUpdateState({...updateState , [e.target.name] : e.target.value})
    
  }
  console.log("user : " , updateState)

  const handlSugmite  =(e) =>{
  e.preventDefault()
  dispatch(updateUser(updateState));
  navigate("/card");  
  }


  return (
    <div>
        <h1 className='text-center'>Edit the Data</h1>
    <form className='w-50 mx-auto my-5'
     onSubmit={handlSugmite}
    >
<div className="mb-3">
<label className="form-label">Name</label>
<input type="text" className="form-control" name='name' 
onChange={newDatafun} 
value={updateState && updateState.name}

 />

<label className="form-label">Email address</label>
<input type="email" className="form-control"  name='email'
 onChange={newDatafun}
value={updateState && updateState.email}
 />

<label className="form-label">Age</label>
<input className="form-control"  name='age'
 onChange={newDatafun}
value={updateState && updateState.age}
/>
</div>

<div className="form-check">
<input className="form-check-input" type="radio" name="gender" value="male"
  onChange={newDatafun} 
// value={updateState[0].gender}
checked ={updateState && updateState.gender === "male"}
  />
<label className="form-check-label" for="flexRadioDefault1">
Male
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="gender" value="female"id="flexRadioDefault2" 
 onChange={newDatafun}
checked ={updateState && updateState.gender === "female"}

/>
<label className="form-check-label" for="flexRadioDefault2">
Female
</label>
</div>
<button type="submit" className="btn btn-primary my-4">Submit</button>
</form>
</div>

  )
}


export default UpdateUser;
