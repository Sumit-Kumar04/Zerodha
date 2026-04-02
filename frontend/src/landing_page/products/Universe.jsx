import React from'react';
import {Link} from 'react-router-dom';
export default function Universe(){
    return(
        <>
        <div className="container">
            <div className="container">
                <div className="row text-center m-5 p-5">
                        <div className="col">
                            <p className='fs-3'>Want to know more about our technology stack? Check out the <Link style={{textDecoration:"none"}} to="https://zerodha.tech/">Zerodha.tech </Link> blog.</p>
                        </div>
                   
                </div>
                <div className="row text-center pb-5">
                    <h3>The Zerodha Universe</h3>
                    <p >Extend your trading and investment experience even further with our partner platforms</p>
                </div>

                <div className="row text-center ">
                   <div className="col-4">
                    <img style={{width:'50%'}} src="media/images/zerodhaFundhouse.png" alt="" />
                   
                   </div>
                  <div className="col-4 mb-5">
                    <img  style={{width:'50%'}}  src="media/images/sensibullLogo.svg" alt="" />
                  
                   </div>
                   <div className="col-4 mb-5">
                    <img  style={{width:'50%'}} src="media/images/tijori.svg" alt="" />
                   
                   </div>
                </div>
                <div className="row text-center">
                   <div className="col-4 mb-5">
                    <img style={{width:'50%'}} src="media/images/streakLogo.png" alt="" />
                   
                   </div>
                  <div className="col-4">
                    <img src="media/images/smallcaseLogo.png" alt="" />
                   
                   </div>
                   <div className="col-4 mb-5">
                    <img style={{width:'50%'}} src="media/images/dittoLogo.png" alt="" />
                    
                   </div>
                    <div className="col mt-5">
                                 
                                <Link to='/signup'>
                                 <button className='p-2 mt-4 btn btn-primary' style={{width:'30%',margin:'0 auto',}}>Sign up now</button>
                                 </Link> 
                                 </div> 
                </div>
                
            </div>
        </div>
        </>
    );
}