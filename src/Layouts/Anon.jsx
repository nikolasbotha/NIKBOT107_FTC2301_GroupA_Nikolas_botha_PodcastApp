import {useContext, useEffect} from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import { GlobalContext} from '../GlobalContext/GlobalContext'
import { createClient } from '@supabase/supabase-js'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa,} from '@supabase/auth-ui-shared'
import { supabase } from '../supabaseClient';


  

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
      <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    providers={[]}
  />
    </div> 
  )}

export default Anon