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

const[rediobtn , setRediobtn] = useState("");
console.log("redion data: " , rediobtn);


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
    <div className='mx-auto'>
      {/* palying codn on user */}

       {/* case1 */}
      {/* {  show ?  <CustomModel id={id} show={show} setShow={setShow}/> : "" } */}

        {show && <CustomModel id={id} show={show} setShow={setShow}/>} 


        <h1 className="w-50 mx-auto">All Date</h1>
   
<div className='mx-auto text-center p-1 mx-2'>

<input className="form-check-input mx-2" type="radio" name="gender" value="all"
checked={rediobtn === ""}
onChange={(e) => setRediobtn(e.target.value)}

/>All
<input className="form-check-input mx-2" type="radio" name="gender" value="male"
checked={rediobtn === "male"}
onChange={(e) => setRediobtn(e.target.value)}
/>Male
<input className="form-check-input mx-2" type="radio" name="gender" value="female"
checked={rediobtn === "female"}
onChange={(e) => setRediobtn(e.target.value)}

/>Female

        
</div>



        <div>

       { users && 
             
             //condn check

             users.filter((ele) =>{
              if(searchData.length === 0){
                return ele;
              }
              else{
                return ele.name.toLowerCase().includes(searchData.name.toLowerCase());
              }
             }).filter((ele) => {
              if(rediobtn === "male"){
                return ele.gender === rediobtn;
              }
              else if(rediobtn === "female"){
                
                return ele.gender === rediobtn;
              }
              else{
                return ele;
              }
             })



       .map((user) => <div key={user.id} className="card w-50 mx-auto m-3 bg-info-subtle text-info-emphasis" >
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
