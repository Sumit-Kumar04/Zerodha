import React from'react';
export default function Hero(){
    return(
        <>
        <div className="container mt-5 pt-5">
            <div className="row text-center p-5">
                <div className="col">
                    <h2>Charges</h2>
                    <p className='fs-3 text-muted'>List of all charges and taxes</p>
                </div>

            </div>
            <div className="row border-bottom mb-5 pb-5">
                <div className="col">
                    <div className="row text-center">
                        <div > <img style={{width:'80%'}} src="media/images/pricing0.svg" alt="" /></div>
                        <div > <p className='text-muted fs-4 text-center' >Free equity delivery</p></div>
                        <p className='pt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                   
                   
                </div>
                <div className="col">
                    <div className="row text-center">
                        <div > <img style={{width:'80%'}} src="media/images/pricing0.svg" alt="" /></div>
                        <div className="col"> <p className='text-muted fs-4 text-center ' >Intraday and F&O trades</p></div>
                        <p className="pt-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                </div>
                <div className="col">
                     <div className="row text-center">
                        <div > <img style={{width:'80%'}} src="media/images/other-trades.svg" alt="" /></div>
                        <div  > <p className='text-muted fs-4 text-center'  > Free direct MF</p></div>
                        <p className='pt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}