import React from 'react'
import {SlCarousel, SlCarouselItem, SlButton, SlDrawer, SlBadge, SlCard, SlRating, SlDivider,  SlDialog} from '@shoelace-style/shoelace/dist/react';
import './Carousel.css'





function Preview(item, previewId) {
const  { id, title, description, seasons, image, genres, updated } = item


  const [drawerOpen, setDrawerOpen] = React.useState(false)
  //const [dialogOpen, setDialogOpen] = useState(false);
  

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
    
    <SlCarouselItem key={id}> 
    
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
        

        <p>{resultString}...</p><br/>
        <p>{episodeGenres}</p>
        </div>  
        <div slot="footer" className="preview-footer">


        <SlDrawer label={title} placement="start" open={drawerOpen} onSlAfterHide={() => setDrawerOpen(false)}>
        <p>{description}</p>
        <SlDivider />
        <p>{episodeGenres}</p>
        
        <SlButton slot="footer" variant="primary" onClick={() => setDrawerOpen(false)}>
          Close
        </SlButton>
      </SlDrawer>

      <SlButton onClick={() => setDrawerOpen(true)}>View details</SlButton>
      <SlButton id={id} onClick={handleButtonClick}>
      View seasons
      <SlBadge  variant="neutral" size ="small" pill>{seasons}</SlBadge>
    </SlButton>
    
    

        </div>

      </div>
    </SlCard>
    </SlCarouselItem> 
    

  );
};


export default function Carousel(props){
  if(props.data.length > 0){
       const CarouselItem = props.data.map((item) => (
        Preview(item, props.previewId))); 
     return (
     <><div>
      <h1>suggestions</h1>
     </div>
     <SlCarousel autoplay={false} navigation pagination slidesPerPage={1} slidesPerMove={1} className='carousel-container'>

      {CarouselItem}
     </SlCarousel></>) }
}



    