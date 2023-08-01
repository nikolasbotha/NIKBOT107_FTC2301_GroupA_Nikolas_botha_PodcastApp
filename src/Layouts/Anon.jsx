import {useContext, useEffect} from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import { GlobalContext} from '../GlobalContext/GlobalContext'



function Anon() {
  const [globalData, setGlobalData] = useContext(GlobalContext)
  const isLoggedIn = globalData.authenticated
  const navigate = useNavigate()

  function handleLogIn() {
    setGlobalData((prevGlobalData) => ({
      ...prevGlobalData,
      authenticated: true,
    }));
  }

  useEffect(()=>{
    if(isLoggedIn) {navigate("/home",{replace: true})}
  },[isLoggedIn])


  return (
    <div>
      <button onClick={handleLogIn}> Login </button>
    </div>
    
  )
}

export default Anon