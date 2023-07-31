import React from 'react'
import { SlButton, SlDrawer, SlBadge, SlCard, SlRating, SlDivider} from '@shoelace-style/shoelace/dist/react';
import './Preview.css'



 function Preview(item, previewId) {
 

  const  { id, title, description, seasons, image, genres, updated } = item
  const [open, setOpen] = React.useState(false)

    
  
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

  function handleButtonClick(event){
    const {id} = event.target
        
        previewId(id)
  }

  return (
    <div className="Preview" key={id}>
    
    <SlCard className="card-overview grid-item" >
      <div className="grid-container">  
        <div className="preview-image-container">
          <img className="preview-image"
          slot="image"
          src={image}
          alt="cover photo"
         />
         <SlRating ></SlRating>
        </div>

        <div className="preview-body">
        <strong>{title}</strong>
        <p>{genreTitlesString}</p>
        <br/>

        <p>{resultString}...</p>
        
        </div>  
        <div slot="footer" className="preview-footer">


        <SlDrawer label={title} placement="start" open={open} onSlAfterHide={() => setOpen(false)}>
        <p>{genreTitlesString}</p>
        <SlDivider /><br/>
        
        
        <p>{description}</p>
        
        
        <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDrawer>

      <SlButton onClick={() => setOpen(true)}>View details</SlButton>
      <SlButton id ={id} onClick={handleButtonClick}>
      seasons
      <SlBadge variant="neutral" size ="small" pill>{seasons}</SlBadge>
    </SlButton>

        </div>

      </div>
    </SlCard>
    </div>

  );
};

export default function PreviewElements(props){
  
    if(props.data.length > 0){
     const previewElementsArray =props.data.map((item) => (
      Preview(item, props.previewId)
    )); 
    return (
      <div className="main-grid-container">
          {previewElementsArray}
      </div>
    )}
    
}