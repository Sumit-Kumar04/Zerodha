import React from'react';
export default function Hero(){
    return(
        <>
        <div className="containe m-5 p-5">
            <div className='row text-center'>
                <div className="col">
                <img style={{width:"70%",margin:'0 auto'}} src='./media/images/homeHero.svg' alt="HeroImage" className='mb-3'/>
                 <h2 >Invest in everything</h2>
                 <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                 <button className='p-2 mt-4 btn btn-primary' style={{width:'30%',margin:'0 auto',}}>Sign up for free</button>
                    </div>
            </div>

        </div>
        </>
    );
}