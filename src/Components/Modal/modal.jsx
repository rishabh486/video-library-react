import React,{useState} from "react";
import { close_icon } from "../../Assests";
import {AddPlaylist} from "../../Reducers/playlist-reducer"
import {usePlayList} from "../../Context/playlist-context"
import "./modal.css";
const Modal = ({ setIsOpen }) => {
    const {state:{playlists},PlaylistDispatch}=usePlayList()
    console.log(playlists)
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const titleChange=(e)=>{
        setTitle(e.target.value)

    }
   
    const DescriptionChange=(e)=>{
        setDescription(e.target.value)

    }
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Playlist</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <span><img style={{ marginBottom: "-3px" }}src={close_icon}/></span>
          </button>
          
          <div className="modalContent">
          <div>
               {playlists.map((playlist)=>(<p>{playlist.description}</p>))} 
          </div>
              <div>
          <label for="username">Title</label>
                <input value={title} onChange={ titleChange} id='username' type="text" class='form-inp' placeholder='title' />
                </div>
                <div>
                <label for="username">Description</label>
                <input value={description} onChange={DescriptionChange} id='username' type="text" class='form-inp' placeholder='description' />
                </div>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() =>AddPlaylist({title:title,description:description},PlaylistDispatch) }>
                Create
              </button>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;