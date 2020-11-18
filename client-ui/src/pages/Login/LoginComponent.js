import React from 'react' ;


import './Login.css' ;

function LoginComponent(props){


    return (


        // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        //     <path fill="#0099ff" fill-opacity="1" d="M0,64L1440,128L1440,320L0,320Z"></path>
        // </svg>

        <section>
            <div className="container-fluid" id="banner-container">
                <div className="container card" id="search-container">

                    <form id="search-form card-body" >
                        <div className="row d-flex justify-content-center">
                            <h2 id="title-header">Login</h2>
                        </div>
                        <div className="form-row d-flex justify-content-center">
                            <div className="form-group col-lg-6 col-md-12">
                                <input type="email" className="form-control" placeholder="Email"/>         
                            </div>
                        </div>
                        <div className="form-row d-flex justify-content-center">
                            <div className="form-group col-lg-6 col-md-12">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                        </div> 
                        <div className="form-row">
                            <div className="form-group col-lg-12 col-md-12 text-center" >
                                <button className="btn btn-outline-primary" id="find-btn">Login</button> 
                            </div> 
                        </div>
                    </form>
                </div>
            
            </div>
        </section>
    )


}

export default LoginComponent ;