import React from "react";
import { close_icon } from "../../Assests";
import "./modal.css";
const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Playlist</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            {/* <RiCloseLine style={{ marginBottom: "-3px" }} /> */}
            <span><img style={{ marginBottom: "-3px" }}src={close_icon}/></span>
          </button>
          <div className="modalContent">
          <label for="username">Title</label>
                <input value=""  id='username' type="text" class='form-inp' placeholder='title' />
                <label for="username">Description</label>
                <input value=""  id='username' type="text" class='form-inp' placeholder='description' />
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Delete
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