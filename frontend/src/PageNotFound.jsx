import React from'react';
import {Link} from 'react-router-dom';
export default function PageNotFound(){
    return(
        <>
        <div className=" container p-5">
            <div className='row text-center p-5 m-5'>
                 <div className="col">
                 <h1 >404 Page Not Found</h1>
                 {/* <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p> */}
                 <Link to='/'>
                 <button className='p-2 mt-4 btn btn-primary' style={{width:'30%',margin:'0 auto',}}>Go to home</button>
                 </Link>
                  </div>
            </div>

        </div>
        </>
    );
}