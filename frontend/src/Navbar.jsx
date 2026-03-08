import React from "react";
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <>
     
        <nav class=" navbar navbar-expand-lg border-bottom fixed-top" style={{backgroundColor:'#fff'}}>
          <div class="container  ">
            <div className="row">
              <div className="col">
                     <Link class="navbar-brand" to="/">
              <img  style={{width:'25%'}}  src="media/images/logo.svg" alt="logo" />
            </Link>
              </div>
              <div className="col mr-0">
                    <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul style={{padding:'3px'}} class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/support">
                    Support
                  </Link>
                </li>
                
                
              </ul>
             
            </div>
              </div>
            </div>
           
            
          </div>
        </nav>
      
    </>
  );
}
