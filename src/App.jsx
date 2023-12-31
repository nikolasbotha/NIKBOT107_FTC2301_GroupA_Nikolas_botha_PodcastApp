//React import
import { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter as Router, Route, Link, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// Layout imports
import Anon from './Layouts/Anon'
import AuthLayout from './Layouts/AuthLayout'

//CSS import
import './App.css'

//import children
import Home from './pages/Home';
import Show from './pages/Show';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Favorites from './pages/Favorites';
// context
import { GlobalContext } from './GlobalContext/GlobalContext';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.5.2/cdn/');


const GlobalRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Anon/>}>
        <Route path='/signin' element={<SignIn/>}/>       
        <Route path='/signup'element={<SignUp/>}/>
      </Route>
      <Route path='/home' element ={<AuthLayout/>}>
        <Route index element={<Home/>}/> 
        <Route path='/home/show/:id' element={<Show/>}/>      
        <Route path='/home/favorites'element={<Favorites/>}/>
      </Route>
    </Route>
  )
)



function App() {

  
  return (
  <>
    <RouterProvider router={GlobalRouter}/>
  </>    
  )
}

export default App

// INVOICE 1472
// INVOICE 1540


// const [allShows, setAllShows] = useState([])
// const [singleShowId, setSingleShowId] = useState(null)
// const [singleShowData, setSingleShowData] = useState([])


// const [globalPageState, setGlobalPageState] = useState ({
//     displayHeader: true,
//     displayCarousel: false,
//     displayPreview: true,
//     displaySinglePodcastView: false
// })


// const displayFilter ={
//   order: "A-Z",
//   search:""
// }


//   const fetchData = async () => {
//     try {
//       const podcasts = await getAllShows();
//       setAllShows(podcasts);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle error if necessary
//     }
//   };

//   useEffect(() => {
//   fetchData();
// }, []);

// function previewId(id){
//   if(id.length >0){
//     setSingleShowId(id)
//     setGlobalPageState((prevState)=>({
//       ...prevState,
//       displayCarousel: false,
//       displayPreview: false,
//       displaySinglePodcastView: true
//     }))
//   }
// }
// useEffect(() =>{
//   if(singleShowId !== null){  

//     const fetchData = async () => {
//     try {
//       const podcast = await getSingleShow(singleShowId);
//       setSingleShowData(podcast);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle error if necessary
//     }
//   }

// fetchData();
// };
  
  
// },[singleShowId])
  


// function closeFunction(id) {

//   if(id.length >0){
//     setSingleShowId(id)
//     setGlobalPageState((prevState)=>({
//       ...prevState,
//       displayCarousel: true,
//       displayPreview: true,
//       displaySinglePodcastView: false
//     }))
// }
// }
