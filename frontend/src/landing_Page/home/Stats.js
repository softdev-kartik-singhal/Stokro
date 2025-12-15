import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return ( 
    <div className='container p-5'>
        <div className='row mt-5 p-5'>
            <div className='col-6 p-5'>
                <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                <h2 className='mt-3 fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with 73.5+
lakh crores worth of equity investments.</p>

                <h2 className='mt-3 fs-4'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push
notifications. High quality apps that you use at your pace, the
way you like.</p>

                <h2 className='mt-3 fs-4'>The Stokro universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in
30+ fintech startups offer you tailored services specific to
your needs.</p>

                <h2 className='mt-3 fs-4'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just
facilitate transactions, but actively help you do better with
your money.</p>

            </div>
            <div className='col-6 p-5'>
                <img  src='media/images/ecosystem.png' style={{width : "90%"}} />
                <br/>
                <Link to="/" style={{textDecoration: "none"}}>Explore our Products <i class="fa-solid fa-arrow-right"></i></Link>
                &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;
                <Link to="/" style={{textDecoration: "none"}}>Try Kite demo</Link>

            </div>
        </div>
    </div>
    );
}

export default Stats;