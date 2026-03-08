import React from'react';
import {Link} from 'react-router-dom';
export default function  Hero(){
    return(
        <>
        <div className="container mt-5 p-5 border-bottom">
            <div className='row pt-5  text-center'>
               <div className="col mb-5">
                 <h1 >Zerodha Products </h1>
                 <p className='mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</p>

                <p className='fs-5'>Check out our {" "} <Link style={{textDecoration:'None'}} to='/signup'>
               investments offerings  <i class="fa-solid fa-arrow-right"></i>
                 </Link> 
                 </p>
                 </div>           
            </div>

        </div>
        </>
    );
}