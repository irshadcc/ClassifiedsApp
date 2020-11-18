import React, { useContext } from 'react';
import {Link } from 'react-router-dom' ;
import UserContext from '../../contexts/UserContext' ;


import './NavBar.css'






function NavBar(props){


    // const [user,setUser] = useContext(UserContext) ;
    const user = { 'isLoggedIn' : true} ; 

    


    const loggedOutOptions = (
        <li className="nav-item mx-1">
            <button className="btn btn-outline-primary">Sign In </button>
        </li>

    )

    const loggedInOptions= (

        <>
            {/* // Add Dropdown for dropdown menu */}
            <li className="nav-item mx-1 icon-option">
                <Link to="/my-dashoard/wishlist">
                    <button class="btn btn-outline-primary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg width='24px' height='24px'>
                            <path d="M5,4v18l7-3l7,3V4c0-1.1-0.9-2-2-2H7C5.9,2,5,2.9,5,4z"/>
                        </svg>
                        <span className="mobile mx-2">My Wishlist</span>
                    </button>
                </Link>
            </li>
            <li className="nav-item mx-1 icon-option">
                <Link to="/my-dashoard">
                    <button class="btn btn-outline-primary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {/* <img width='24px' src="icons/person.svg"/> */}
                        <span className="d-inline mx-2">My Dashboard</span>
                    </button>
                </Link>

                {/* <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div> */}
            </li>

        </>
    )


    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/">
                <img className="brand-logo mr-3" src="icons/HomeLogo.svg" />    
                <span className="brand-text">PROPERTY FIND</span>

            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                   { user.isLoggedIn ? loggedInOptions : loggedOutOptions} 
                </ul>
            </div>
        </nav> 
        )
    }


export default NavBar ;