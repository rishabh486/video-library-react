import React from 'react'
import "./watchlater.css"
import {useNavigate} from "react-router-dom"
import { delete_icon, favourite_icon } from "../../Assests/index";
import {useWatchLater} from "../../Context/watchLater-context"
import {useVideo} from "../../Context/video-context"
import {RemoveFromWatchLater} from "../../Reducers/watch-later"
function WatchLater() {
    const {state:{watchlater},dispatch}=useWatchLater()
    const{video,state} =useVideo()
    const naviagte=useNavigate()
    function redirectToSinglePage(id){
        naviagte(`/single-video/${id}`)
    }
    
  
  return (<div>
   
         {watchlater?.map((videos)=>
        (
                <div className="cards-example card-margin">
                    <div className="wrapper">
                        <div className="top">
                            <iframe width="100%" height="200" src={videos.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                                     onClick={()=>redirectToSinglePage(videos._id)}
                                    class="button-container-button primary-button"
                                >WATCH NOW</button>



                            </div>
                        </div>

                    </div>
                    <div className="round-image">
                        <img 
                        onClick={()=>RemoveFromWatchLater(videos._id,dispatch)}
                        className="round"
                            src={delete_icon} />

                    </div>
                </div>
            ))}
            </div>
    
    
  )
}

export default WatchLater