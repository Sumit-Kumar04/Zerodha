import React from'react';
import {Link} from 'react-router-dom'
export default function RightSection({imageUrl,productName,productDescription,learnMore}){
    return(
        <>
         <div className="container mt-5 pt-5 ">
            <div className="row align-items-center ">
               
                <div className="col-5">
                   
                        <h2>{productName}</h2>
                    <p className='text-muted mt-5'>{productDescription}</p>
                    <Link style={{textDecoration:'none'}} to={learnMore}>LearnMore<i class="fa-solid fa-arrow-right"></i></Link>
                  
                    

                   
                </div>
                <div className="col-2"></div>
                
                 <div className="col-5">
                   
                    <img src={imageUrl} alt="" />
                </div>

                 
            </div>
        </div>
        </>
    );
}