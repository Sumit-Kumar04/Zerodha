import React from'react';
export default function Education(){
    return(
        <>
        <div className="container mt-5 p-5">
            <div className="row ">
                <div className="col">
                    <img src="media/images/education.svg" alt="" />
                </div>
                <div className="col">
                    <h4>Free and open market education</h4>
                    <p className='text-muted mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a style={{textDecoration:'none'}} href="">Varsity<i class="fa-solid fa-arrow-right"></i></a>

                    <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                     <a style={{textDecoration:'none'}} href="">TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>

                </div>
            </div>
        </div>
        </>
    );
}