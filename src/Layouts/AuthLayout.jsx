import React from 'react'
//import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../GlobalContext/GlobalContext';

function AuthLayout() {

const [globalData, setGlobalData] = React.useContext(GlobalContext);
const isLoggedIn = globalData.authenticated
  
  return (
    <div>AuthLayout</div>
  )
}

export default AuthLayout