import React from 'react'
import "./video-card.css"
import {useNavigate} from "react-router-dom"
import {useVideo} from "../../Context/video-context"
import {filterByCategory} from "../../Reducers/filter"
import { favourite_icon, like_icon, watchlater_icon } from "../../Assests/index";
import {useWatchLater} from "../../Context/watchLater-context"
import {AddToWatchLater,AddToLikedVideo} from "../../Reducers/watch-later"
function VideoCard() {
    const {state:{watchlater,likes},dispatch}=useWatchLater()
    const naviagte=useNavigate()
    function redirectToSinglePage(id){
        naviagte(`/single-video/${id}`)
    }
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
                <iframe width="100%" height="200" src={videos.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='like-box'>
                <div className="top-1">
                    <h1>{videos.title}</h1>
                    <p>{videos.creator}</p>
                </div>
                <div className="top-2">
                   <img 
                   onClick={()=>AddToLikedVideo(videos,dispatch)}
                    className="like-icon"src={like_icon}/>
                </div>
                </div>
                <div className="top-3">
                   
                    <div class="card-button">
            <button
            onClick={()=>redirectToSinglePage(videos._id)}
                class="button-container-button primary-button"
              >WATCH NOW</button>  
              
                
              
            </div>
                </div>

            </div>
            <div className="round-image">
                <img 
                onClick={()=>AddToWatchLater(videos,dispatch)}
                className="round"
                    src={watchlater_icon} />

            </div>
        </div>
       ) )}
    </div>
  )
}

export default VideoCard