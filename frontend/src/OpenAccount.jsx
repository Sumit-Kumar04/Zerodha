import React from'react';
import {Link} from 'react-router-dom';
export default function OpenAccount(){
    return(
        <>
        <div className="container  p-5">
            <div className='row   text-center'>
               <div className="col">
                 <h2 >Open a Zerodha account</h2>
                 <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

                <Link to='/signup'>
                 <button className='p-2 mt-4 btn btn-primary' style={{width:'30%',margin:'0 auto',}}>Create account</button>
                 </Link> 
                 </div>           
            </div>

        </div>
        </>
    );
}