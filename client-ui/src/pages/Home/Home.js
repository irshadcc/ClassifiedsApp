import React,{ useState } from 'react';
import NavBar from './../../components/NavBar/NavBar'
import SearchCard from './../../components/SearchForm/SearchCard'

import './Home.css'


function About(){


  return (

    <div className="container-fluid my-1">
      <div className="row about-item">

        <div className="col-lg-6 d-flex justify-content-center about-item-img-wrapper">
            <img src="assets/web-search.svg" />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>Search for Properties</h2>
            <p>
              Search for properties using our advanced criteria's ;
            </p>
        </div>

      </div>
      <hr></hr>
      <div className="row about-item ">
        <div className="col-lg-6 d-flex justify-content-center about-item-img-wrapper">
            <img src="assets/wishlist-about.svg" />
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2>Wishlist</h2>
            <p>
              Shortlist the favourite properties using wishlist feature 
            </p>
        </div>

      </div>

    </div>

  )
}




function Home() {
   
  let [user,setUser] = useState(null) ; 
  let [isLoggedIn,setIsLoggedIn] = useState(false) ;
  
  
  return (
    <>
      <NavBar/>
      <SearchCard/>
      <About/>
    </>
  
  
  );
}

export default Home;
