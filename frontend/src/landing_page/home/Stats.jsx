import React from'react';
export default function Stats(){
    return(
        <>
      <div className="container  mt-5 p-5 ">
        <div className="row ">
            <div className="col-4 p-2">
                <h2 className='mb-5'>Trust with confidence</h2>
                <h4 className='mt-2'>Customer-first always</h4>
                <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h4 >No spam or gimmicks</h4>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a style={{textDecoration:'none'}} href=''>Our philosophies</a>.</p>
                <h4 >The Zerodha universe</h4>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h4 >Do better with money</h4>
                <p className='text-muted'>With initiatives like <a style={{textDecoration:'none'}} href="">Nudge</a> and <a  style={{textDecoration:'none'}} href=""> Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>

            </div>
            <div className="col-1"></div>
            <div className="col-7 p-5">
                <img style={{width:'100%'}} src="media/images/ecosystem.png"/>

                <div className='text-center'>
                    <a  style={{textDecoration:'none'}} className='mx-5' href="">Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                    <a  style={{textDecoration:'none'}} className='p' href="">Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
      </div>
        
        </>
    );
}