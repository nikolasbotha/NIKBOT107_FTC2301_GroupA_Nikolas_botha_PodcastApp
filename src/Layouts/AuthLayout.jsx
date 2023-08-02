import {useContext, useState, useEffect} from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import { GlobalContext } from '../GlobalContext/GlobalContext';
import Header from '../modules/Header'
import Footer from '../pages/Footer';
import './AuthLayout.css'


function AuthLayout() {
const navigate = useNavigate()
const data = useContext(GlobalContext)
const isLoggedIn = data[0].authenticated


useEffect(()=>{
  if(!isLoggedIn) {navigate("/",{replace: true})}
},[isLoggedIn])

  
  return (
    <div>
      
      <Header/>
      <Outlet/>
      <Footer/>
      
      
    </div>
  )
}

export default AuthLayout