import React from 'react'
import "./video-card.css"
import {useVideo} from "../../Context/video-context"
function VideoCard() {
    const{videos} =useVideo()
    console.log(videos)
  return (
    <div>
         <div className="cards-example card-margin">
            <div className="wrapper">
                <div className="top">
                    <img
                        src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" />
                </div>
                <div className="top-1">
                    <h1>Our Changing Planet</h1>
                    <p>by Kurt Wagner</p>
                </div>
                <div className="top-2">
                    <p>
                        Visit ten places on our planet that are undergoing the biggest changes today.
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
                    src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" />

            </div>
        </div>
    </div>
  )
}

export default VideoCard