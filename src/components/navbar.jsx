import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link } from "react-router-dom"
import { searchUser } from '../App/features/userDetails';

export const Navbar = () => {
const[value , setValue] = useState("");

const allData = useSelector(s => s.app.users)
const dispatch = useDispatch();


const handlSerach = (e) =>{
  setValue({[e.target.name] : e.target.value});

}

useEffect(() =>{
  
  dispatch(searchUser(value));

},[value])

// console.log("serach value : " , value);



  return (
    <>
             <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <span className="navbar-brand" ><b>JDJ</b></span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page"  > Create Post</Link>
{/*        
           <NavLink to="/" className={({isActive}) =>{
            `${isActive ? "active-class" : "naactive-class"}`
           }}Create Post </NavLink> */}
        
        </li>
        <li className="nav-item">

           <Link  to="/card" className="nav-link" > All Post ({allData.length})</Link>

        </li>
      </ul>
        
      <form className="d-flex" role="search">
      <input className="form-control me-2 w-80" type="search" placeholder="Search" aria-label="Search" name='name' onChange={handlSerach}/>
      {/* <input className="form-control me-2 w-80" type="search" placeholder="Search" aria-label="Search"  onChange={}/> */}

      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
