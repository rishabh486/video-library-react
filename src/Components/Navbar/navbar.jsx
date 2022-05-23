import React,{useState} from 'react'
import  "./navbar.css"
import {Link} from "react-router-dom"
function Navbar() {
    function getNavLinks(){
const[tokenExists,setTokenExists]=useState(true)
        if(tokenExists){
            return(
                <>
                    <a> Watch Later</a>
                    <a>
                    <div class="notification">
                        <div class="icon-badge">
                            <button type="button" class="icon-button" id="cart-button">
                                <span>
                                 <img class="icon-img" src="" />
                                </span>
                            </button>
                            <span class="icon-badge-number">
                                {}
                            </span>

                        </div>
                    </div>
                </a>
                <a className='logout-button'>Logout</a>

                </>
            )
        } else {
            return<>
                <a >Signin</a> 
                <a>Signup</a> 
</>
        }
    }
    return (
 <div> 
    <div className="navbar">
        <div class='brand'>
            <h2>RTUBE</h2>
        </div>

        <div class="leftside">
            <div class="links">
             <a href="">Home</a>
            {getNavLinks()}
            </div>

        </div>
        <div class="rightside">
            <input type="text" placeholder="search.." />
            <button>search</button>
        </div>

    </div>
    
</div>
  )
}

export default Navbar