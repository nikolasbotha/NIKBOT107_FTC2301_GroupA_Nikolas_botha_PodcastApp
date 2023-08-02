import {useState, useEffect, useContext} from 'react'
import { SlAvatar, SlButton, SlDrawer } from '@shoelace-style/shoelace/dist/react';

import { GlobalContext } from '../GlobalContext/GlobalContext.jsx';
import './Footer.css'



function Footer() {

  const [open, setOpen] = useState(false);
  const [globalData, setGlobalData] = useContext(GlobalContext)

  if (globalData.episodePlaying !== null){
    const { title, description, episode: episodeNumber, file} = globalData.episodePlaying[0]
    const image = globalData.episodePlaying[1]
    

    return (
      <div className='Footer'>
      <SlAvatar className='episode-image'
         image={image}
        label="Avatar of a gray tabby kitten looking down"
      />  
        <audio id='audioElement' className='audio-player' controls>
              <source src={file} type="audio/mpeg"/>
          </audio>
          <p></p>
        

      <SlDrawer label={title} placement="bottom" open={open} onSlAfterHide={() => setOpen(false)}>
        {description}
        <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDrawer>

      <SlButton className='description-drawer' onClick={() => setOpen(true)}>details</SlButton>
    </div>

          
          
      )
  } 
}

export default Footer


// export function playAudio(episode){
//   const { title, description, episode: episodeNumber, file } = episode;
// const audioState ={
//   title: title,
//   description: description, 
//   episodeNumber: episodeNumber, 
//   file: file
// }  
// setAudioState(audioState);  
// }