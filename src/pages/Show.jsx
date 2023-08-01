import {supabase} from '../supabaseClient.js';
import { useEffect, useState } from "react";
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
import getSingleShow from "../modules/GetSingleShow";
import "./Show.css";

function Show() {
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
            console.log(data)
            }
            return(
                <SlTreeItem prop= {episode}>
                  <SlIcon name="music-note" />
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
                <br />
              </div>
              <div slot="footer" className="preview-footer">
                <p>{description}</p>
              </div>
            </div>
            <div>
              <SlTree class="tree-with-icons">
                <SlTreeItem expanded>
                 <h2> view shows </h2>
                {SeasonsTreeItems}
              


                    {/* <SlTreeItem>
                      <SlIcon name="folder" />
                      Folder 1
                            <SlTreeItem>
                              <SlIcon name="files" />
                              File 1 - 1
                            </SlTreeItem>
                                  <SlTreeItem disabled>
                                    <SlIcon name="files" />
                                    File 1 - 2
                                  </SlTreeItem>
                            <SlTreeItem>
                              <SlIcon name="files" />
                              File 1 - 3
                            </SlTreeItem>
                    </SlTreeItem> */}
                  
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
