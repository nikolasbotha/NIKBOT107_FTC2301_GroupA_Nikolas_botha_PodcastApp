import {supabase} from '../supabaseClient.js';
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from '../GlobalContext/GlobalContext.jsx';
import { useParams } from "react-router-dom";
import {
  SlButton,
  SlCard,
  SlRating,
  SlOption,
  SlSelect,
  SlIcon,
  SlTree,
  SlTreeItem,
} from "@shoelace-style/shoelace/dist/react";
import "./Show.css";

function Show() {

  const [globalData, setGlobalData] = useContext(GlobalContext)

  const { id } = useParams();
  const [SinglePodcastData, setSinglePodcastData] = useState(null);
  
  //-----------------------

  useEffect(() => {
    const showLoader = async () => {
      try {
        const response = await fetch(
          `https://candid-cocada-e08649.netlify.app/id/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const podcast = await response.json();
        setSinglePodcastData(podcast);
      } catch (error) {
        console.error("Error in getSingleShow:", error);
        throw error;
      }
    };
    showLoader();
  }, [id]);



  

  
  if (SinglePodcastData !== null) {
    function makeSeasonItems(seasons) {
       const SeasonsTree = seasons.map((seasonsObj) => {
      const episodesList= seasonsObj.episodes
      
      

//-- generating episodes inside the Seasons
          const episodesTree = episodesList.map((episode)=>{

            const handleFavorites= async()=>{
            const { data, error } = await supabase
            .from('PodcastFavorites')
            .insert([
              {
                 title: episode.title, 
                 'episode_number': episode.episode,
                 file: episode.file,
                 season: seasonsObj.season,
                 'show_title': seasonsObj.title,
                 'show_id': id
                },
            ])
            .select()
            }

            const setEpisodePlaying = () => {
              setGlobalData((prevState) => ({
                ...prevState,
                episodePlaying: [episode, SinglePodcastData.image]
              }));
            };

            return(
                <SlTreeItem prop= {episode}>
                  <SlRating max={1}
                      label="Rating"
                      getSymbol={() => '<sl-icon name="heart-fill"></sl-icon>'}
                      style={{ '--symbol-color-active': '#ff4136', 'padding':'8px '}}
                    />
                  <SlButton prop={episode} 
                  variant="default" size="small" 
                  onClick={setEpisodePlaying} circle
                  style={{ 'padding':'8px '}}>
                      <SlIcon name="play-circle-fill" />
                  </SlButton>
                  <p> {episode.episode}- {episode.title}</p>
                  <button onClick={handleFavorites}>add to fav</button>
                      

                </SlTreeItem>
            ) 
          })    


        return (
          <SlTreeItem key={seasonsObj.title}>
            <SlIcon name="folder" />
            {seasonsObj.title}
            {episodesTree}
          </SlTreeItem>
        );
      });
      return SeasonsTree;
    }

    const { title, description, seasons, image, updated, genres, updates } =
      SinglePodcastData;

      const date = new Date(SinglePodcastData.updated)
      const year = date.getFullYear();
      const month = date.toLocaleString('default', { month: 'long' });
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');


    const wordsArray = description.trim().split(/\s+/);
    const first10Words = wordsArray.slice(0, 11);
    const resultString = first10Words.join(" ");

    const genreTitles = {
      1: "Personal Growth",
      2: "True Crime and Investigative Journalism",
      3: "History",
      4: "Comedy",
      5: "Entertainment",
      6: "Business",
      7: "Fiction",
      8: "News",
      9: "Kids and Family",
    };

    const episodeGenres = genres.map((number) => genreTitles[number]);
    const genreTitlesString = episodeGenres.join(" ");

    const SeasonsTreeItems = makeSeasonItems(seasons)

    //const previeElementsOptionsArray = makeSeasonsOptionsElements(seasons);

    return (
      <div className="show-parent-container">
        <div className="Preview" key={id}>
          <SlCard className="card-overview grid-item">
            <div className="grid-container">
              <div className="preview-image-container">
                <img
                  className="preview-image"
                  slot="image"
                  src={image}
                  alt="cover photo"
                />
                <SlRating></SlRating>
              </div>

              <div className="preview-body">
                <strong>{title}</strong>
                <p>genres: {genreTitlesString}</p>
                <p>updated: {day}/{month}/{year}   - {hours}:{minutes}:{seconds}</p>
                <br />
              </div>
              <div slot="footer" className="preview-footer">
                <p>{description}</p>
              </div>
            </div>
            <div className='tree'>
              <SlTree class="tree-with-icons">
                <SlTreeItem expanded>
                 <h2> view shows </h2>
                {SeasonsTreeItems}
              


              
                  
                </SlTreeItem>
              </SlTree>
            </div>
          </SlCard>
        </div>
      </div>
    );
  }
}

export default Show;
