import React from 'react' ;
import { Link } from 'react-router-dom' ;


import './SearchCard.css' ;

function SearchCard(){


    return (


        // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        //     <path fill="#0099ff" fill-opacity="1" d="M0,64L1440,128L1440,320L0,320Z"></path>
        // </svg>

        <section id="search-card-section">
            <div className="container-fluid" id="banner-container">
                
                <div className="container card" id="search-container">

                    <form id="search-form card-body" >
                        <div className="row d-flex justify-content-center">
                            <h2 id="title-header">Search Properties</h2>
                        </div>


                        <div className="form-row">
                            <div className="form-group col-lg-2 col-md-12">
                            
                                <select className="form-control">
                                    <option value="Rent">Rent</option>
                                    <option value="Buy">Buy</option>
                                    <option value="Commercial rent">Commercial Rent</option>
                                    <option value="Commercial buy">Commercial Buy</option>
                                </select>
                            </div>

                            <div className="form-group col-lg-10 col-md-12">
                                <input type="text" className="form-control" placeholder="Location"/>         
                            </div>
                        </div>
                    
                        <div className="form-row">
                            <div className="form-group col-lg-2 col-md-12">
                                <select className="form-control">
                                    <option value="">Property Type</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Villa">Villa</option>
                                </select>
                            </div>
                            <div className="form-group col-lg-3 col-md-12">
                            
                                <input type="number" className="form-control" placeholder="Min Price"/>
                            </div>
                            <div className="form-group col-lg-3 col-md-12">
                                <input type="number" className="form-control" placeholder="Max Price"/>
                            </div>
                            <div className="form-group col-lg-3 col-md-12">
                                <select className="form-control">
                                    <option value="">Emirate</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="Abu Dhabi">Abu Dhabi</option>
                                    <option value="Sharjah">Dubai</option>
                                    <option value="Ajman">Abu Dhabi</option>
                                    <option value="Umm Ul Quwein">Dubai</option>
                                    <option value="Ras Al Khaimah">Abu Dhabi</option>
                                    <option value="Fujairah">Fujairah</option>
                                </select>
                            </div>
                        </div> 
                        <div className="form-row">
                            <div className="form-group col-lg-12 col-md-12 text-center" >
                                <Link to='/search'>
                                    <button className="btn btn-outline-primary" id="find-btn">Find</button> 
                                </Link>
                            </div> 
                        </div>
                    </form>
                </div>
            
            </div>
        </section>
    )


}


export default SearchCard ;