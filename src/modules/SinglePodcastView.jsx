import React from 'react'
import { SlButton, SlDrawer, SlBadge, SlCard, SlRating, SlDivider, SlOption, SlSelect} from '@shoelace-style/shoelace/dist/react';
function makeSeasonsOptionsElements(seasons){

      const previewElementsArray =seasons.map((seasonsObj) => {
          return (
            <SlOption key={seasonsObj.season} value='season{seasonsObj.season}' >Season {seasonsObj.season}</SlOption>
          )
      })
          return previewElementsArray
 }



function SinglePodcastView(props){

    if(props.data.length < 1){
        return
    }
    
    const {id, title, description, seasons, image, updated, genres, updates} = props.data
    

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
    
    const previeElementsOptionsArray = makeSeasonsOptionsElements(seasons)
    


    return(
        <>
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
            <p>genres: {genreTitlesString}</p>
            <br/>
            </div>  
            <div slot="footer" className="preview-footer">
            <SlSelect placeholder="select a season" >
                {previeElementsOptionsArray}
            </SlSelect>
    
            </div>
    
          </div>
        </SlCard>
        </div>
        </>
    )
}
export default SinglePodcastView