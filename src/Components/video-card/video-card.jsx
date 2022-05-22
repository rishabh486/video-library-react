import React from 'react'
import "./video-card.css"
import {useVideo} from "../../Context/video-context"
import {filterByCategory} from "../../Reducers/filter"
import { favourite_icon } from "../../Assests/index";
function VideoCard() {
    const{video,state} =useVideo()
    const {filter}=state
    const{categoryName}=filter
    const CategoryData=filterByCategory(video,categoryName)
  return (
    <div className='video-card'>
        {CategoryData.map((videos)=>(
         <div className="cards-example card-margin">
            <div className="wrapper">
                <div className="top">
                    <img
                        src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" />
                </div>
                <div className="top-1">
                    <h1>{videos.title}</h1>
                    <p>{videos.creator}</p>
                </div>
                <div className="top-2">
                    <p>
                    {videos.description}
                    </p>
                </div>
                <div className="top-3">
                   
                    <div class="card-button">
            <button
                class="button-container-button primary-button cart"
              >WATCH NOW</button>  
              
                
              
            </div>
                </div>

            </div>
            <div className="round-image">
                <img className="round"
                    src={favourite_icon} />

            </div>
        </div>
       ) )}
    </div>
  )
}

export default VideoCard