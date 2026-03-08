import React from'react';
import {Link} from 'react-router-dom';
export default function Team(){
    return(
        <>
          <div className="container mb-5 ">
             <h2 className='text-center mb-5'>People</h2>
            <div className="row  ">
               
                <div className="col-1"></div>
                <div className="col-5 text-center">
                    <img src="/media/images/nithinKamath.jpg" style={{width:'70%',borderRadius:'50%'}} alt="" />
                    <p className='pt-2'>Nithin Kamath</p>
                    <p className='text-muted'>Founder, CEO</p>
                </div>
                <div className="col-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <Link to="https://nithinkamath.me/" >Homepage</Link> / <Link to="https://tradingqna.com/u/nithin/summary" >TradingQnA</Link> / <Link to="https://x.com/Nithin0dha" >X</Link></p>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
        

        <div className="container  ">
            
            <div className="row  ">
                 <div className="col text-center mb-4">
                    <img src="/media/images/Nikhil.jpg" style={{width:'70%',borderRadius:'50%'}} alt="" />
                    <p className='pt-2'>Nikhil Kamath</p>
                    <p className='text-muted team-text'>Founder, CEO</p>
                </div>
                 <div className="col text-center mb-4">
                    <img src="/media/images/Kailash.jpg" style={{width:'70%',borderRadius:'50%'}} alt="" />
                    <p className='pt-2'>Dr. Kailash Nadh</p>
                    <p className='text-muted team-text'>CTO</p>
                </div>
                 <div className="col text-center mb-4">
                    <img src="/media/images/Venu.jpg" style={{width:'70%',borderRadius:'50%'}} alt="" />
                    <p className='pt-2'>Venu Madhav</p>
                    <p className='text-muted team-text'>COO</p>
                </div>

            </div>
            <div className="row  ">
                 <div className="col text-center mb-4">
                    <img src="/media/images/Seema.jpg" style={{width:'70%',borderRadius:'50%'}} alt="" />
                    <p className='pt-2'>Seema Patil</p>
                    <p className='text-muted team-text'>Director</p>
                </div>
                 <div className="col text-center mb-4">
                    <img src="/media/images/karthik.jpg" style={{width:'70%',borderRadius:'50%'}} alt="" />
                    <p className='pt-2'>Karthik Rangappa</p>
                    <p className='text-muted team-text'>Chief of Education</p>
                </div>
                 <div className="col text-center mb-4">
                    <img src="/media/images/Austin.jpg" style={{width:'70%',borderRadius:'50%'}} alt="" />
                    <p className='pt-2'>Austin Prakesh</p>
                    <p className='text-muted team-text'>Director Strategy

</p>
                </div>

            </div>
            
            
        </div>


        </>
    );
}