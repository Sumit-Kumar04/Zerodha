import React from'react';
export default function Awards(){
    return(
        <>
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-6">
                    <img style={{height:'90%'}}  src='/media/images/largestBroker.svg'/>
                </div>
                <div className="col-6">
                    <h3>Largest stock broker in India</h3>
                    <p className='mt-5'>2+ million Zerodha clents contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                             <ul>
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                             </ul>
                        </div>
                    </div>
                    <img  className="mt-4" style={{width:'80%'}} src="/media/images/pressLogos.png" alt="" />
                   
                </div>
            </div>
        </div>
        </>
    );
}