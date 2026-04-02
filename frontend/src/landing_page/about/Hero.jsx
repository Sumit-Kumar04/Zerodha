import React from'react';
import {Link} from 'react-router-dom';
export default function Hero(){
    return(
        <>
        <div className="container  p-5">
            <div className="row p-5 border-bottom text-center ">
                <div className="col p-5">
                     <h4>We pioneered the discount broking model in India.</h4>
                     <h4>Now, we are breaking ground with our technology.</h4>
                </div>
            </div>
        </div>

        <div className="container  p-5">
            <div className="row p-5  ">
                <div className="col-1"></div>
                <div className="col-5">
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="col-5">
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p><Link style={{textDecoration:'none'}} to='\'>Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <Link style={{textDecoration:'none'}} to='\'>blog</Link> or see what the media is 
                    <Link style={{textDecoration:'none'}} to='\'>saying about us </Link>or learn more about our business and product <Link style={{textDecoration:'none'}} to='\'>philosophies</Link>.</p>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
        
        </>
    );
}