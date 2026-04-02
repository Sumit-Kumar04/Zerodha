import React from'react';
export default function Hero(){
    return(
        <>
        <div className=' support-hero'>
              <div className="container mb-5">
            <div className="row mt-5  p-5">
                <div className="col">

                    <h2 className='fs-1' >Support Portal</h2>
                    
                </div>
                <div className="col  text-end">

                    <button className='btn btn-primary ps-4 pe-4 fs-5'>My tickets</button>
                    
                </div>
            </div>

            <div className="row ms-5">
                 
                <input className='support-input mb-5' type="text" placeholder='🔍︎ Eg. How do I open my account,..' />
            </div>
        </div>
        </div>
        </>
    );
}