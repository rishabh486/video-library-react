import React from 'react'
import "./like.css"
import {useNavigate} from "react-router-dom"
import {useVideo} from "../../Context/video-context"
import { favourite_icon ,delete_icon} from "../../Assests/index";
import {useWatchLater} from "../../Context/watchLater-context"
import {RemoveFromLikedVideos} from "../../Reducers/watch-later"
function Like() {
    const {state:{likes},dispatch}=useWatchLater()
    const naviagte=useNavigate()
    function redirectToSinglePage(id){
        naviagte(`/single-video/${id}`)
    }
 const{video,state} =useVideo()
  
  return (<div>
   
         {likes?.map((videos)=>
        (
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
                   onClick={()=>RemoveFromLikedVideos(videos._id,dispatch)}
                    className="like-icon"src={delete_icon}/>
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
                        <img className="round"
                            src={favourite_icon} />

                    </div>
                </div>
            ))}
            </div>
    
    
  )
}

export default Like