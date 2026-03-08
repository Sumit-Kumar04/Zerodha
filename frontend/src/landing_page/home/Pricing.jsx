import React from'react';
export default function Pricing(){
    return(
        <>
        <div className="container mt-5 p-5">
            <div className="row ">
                <div className="col-4">
                    <h3>Unbeatable pricing</h3>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a style={{textDecoration:'none'}} href="">See pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col"> <img style={{width:'100%'}} src="media/images/pricing0.svg" alt="" /></div>
                        <div className="col"> <p className='text-muted pricing-text' >Free account opening</p></div>
                    </div>
                   
                   
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col"> <img style={{width:'100%'}} src="media/images/pricing0.svg" alt="" /></div>
                        <div className="col"> <p className='text-muted pricing-text' > Free equity delivery
and direct mutual funds</p></div>
                    </div>
                </div>
                <div className="col">
                     <div className="row">
                        <div className="col"> <img style={{width:'100%'}} src="media/images/other-trades.svg" alt="" /></div>
                        <div className="col text-center"> <p className='text-muted pricing-text'  > Intraday and
F&O</p></div>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}