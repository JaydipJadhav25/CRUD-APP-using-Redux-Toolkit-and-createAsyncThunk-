import React, { useEffect, useState } from 'react'
import {  useDispatch , useSelector } from 'react-redux';
import { deleteUser, showUser } from '../App/features/userDetails';
import CustomModel from './CustomModel';
import { Link  } from 'react-router-dom'



export const Card = () => {
 const[id  , setId] = useState("");
 console.log("user id : " , id)

 const[show , setShow ] = useState(false);
 console.log("show : " , show)

  const dispatch = useDispatch();
  //destrutcher a obj
  const {users , loading , error , searchData}= useSelector((state) => state.app)

  // console.log("all data : " ,users)

     console.log(" search : " , searchData)

   useEffect(()=>{
      dispatch(showUser());

   },[])

  //  if(allData.loading){
  //   return <h1>Loading.........</h1>
  //  }
  //  if(allData.error){
  //   return <h1>Error {allData.erro}</h1>
  //  }

   if(loading){
    return <h1>Loading.........</h1>
   }
   if(error){
    return <h1>Error {error}</h1>
   }




  return (
    <div>
      {/* palying codn on user */}

       {/* case1 */}
      {/* {  show ?  <CustomModel id={id} show={show} setShow={setShow}/> : "" } */}

        {show && <CustomModel id={id} show={show} setShow={setShow}/>} 


        <h1 className="w-50 mx-auto">All Date</h1>

        <div>

       { users && 
       users.map((user) => <div key={user.id} className="card w-50 mx-auto m-3 bg-info-subtle text-info-emphasis" >
  <div className="card-body mx-auto bg-info-subtle text-info-emphasis text-center">
    <h5 className="card-title mx-auto">{user.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
    {/* <p className='card-text'>{user.age}</p> */}
    <p className='card-text'>{user.gender}</p>
    <button href="#" className="card-link" onClick={() => {setId(user.id);setShow(!show)}}>
      View </button>
    <Link to={`/update/${user.id}`} className="card-link"  >Edit</Link>
    <Link className="card-link" onClick={() =>dispatch(deleteUser(user.id))}>Delete</Link>
  </div>
</div>)

       }
        </div>

    </div>
  )
}


export default Card;
