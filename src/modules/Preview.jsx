
import { SlButton, SlDrawer, SlBadge, SlCard, SlRating, SlDivider} from '@shoelace-style/shoelace/dist/react';
import './Preview.css'
import { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { Link } from 'react-router-dom';



function Preview(item) {

  const  { id, title, description, seasons, image, genres, updated } = item
  const [open, setOpen] = useState(false)

    
  
    const wordsArray = description.trim().split(/\s+/);
    const first10Words = wordsArray.slice(0, 11);
    const resultString = first10Words.join(' ');

    
    
    const genreTitles ={
      "1": "Personal Growth",
      "2": "True Crime and Investigative Journalism",
      "3": "History",
      "4": "Comedy",
      "5": "Entertainment",
      "6": "Business",
      "7": "Fiction",
      "8": "News",
      "9": "Kids and Family"
    }

    const episodeGenres = genres.map(number => genreTitles[number]);
    const genreTitlesString= episodeGenres.join(" ")

    // const handleFavorites =()=>{
    //   console.log(title)
    // }

   return (
    <div className="Preview" key={id}>
    
    <SlCard className="card-overview grid-item" >
      <div className="grid-container">  
        <div className="preview-image-container">

        <Link to={`/home/show/${id}`} >
          <img className="preview-image"
          slot="image"
          src={image}
          alt="cover photo"
         />
        </Link>

         <SlRating ></SlRating>
         
        </div>

        <div className="preview-body">
        <strong>{title}</strong>
        <p>{genreTitlesString}</p>
        <br/>

        <p>{resultString}...</p>
        
        </div>  
        <div id={id} slot="footer" className="preview-footer">


        <SlDrawer label={title} placement="start" open={open} onSlAfterHide={() => setOpen(false)}>
        <p>{genreTitlesString}</p>
        <SlDivider /><br/>
        
        
        <p>{description}</p>
        
        
        <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDrawer>

      <SlButton onClick={() => setOpen(true)}>View details</SlButton>

      <Link to={`/home/show/${id}`} >
      <SlButton id ={id} >
      seasons
      <SlBadge variant="neutral" size ="small" pill>{seasons}</SlBadge>
        </SlButton>
      </Link>
        </div>

      </div>
    </SlCard>
    </div>

   );
 };


export default function PreviewElements(props){

  const data = useContext(GlobalContext)
  const allShows = data[0].allShows
  
    if(allShows.length > 0){
       const previewElementsArray = allShows.map((item) => (
        Preview(item))); 
    return (
      <div className="main-grid-container">
           {previewElementsArray}
      </div>
     )}}