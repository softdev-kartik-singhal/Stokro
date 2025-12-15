import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row'>
                <h1 className='text-center mt-5 mb-5 fs-2' style={{width: "60%", margin: "0 auto"}}>We pioneered the discount broking model in India.
Now, we are breaking ground with our technology.</h1>
            </div>
            <div className='row mt-5 border-bottom' >
                <hr className='mb-5'/>
                <div className='col-1'></div>
                <div className='col p-5 text-muted'>
                    <p>
                        We kick-started operations on the 15th of August, 2010
with the goal of breaking all barriers that traders and
investors face in India in terms of cost, support, and
technology. We named the company Stokro, a
combination of Stock and "Karo", the Hindi word for
"do".
                    </p>
                    <p>
                        Today, our disruptive pricing models and in-house
technology have made us the biggest stock broker in
India.
                    </p>
                    <p>
                        Over 1+ Crore clients place millions of orders every day
through our powerful ecosystem of investment
platforms, contributing over 15% of all Indian retail
trading volumes.
                    </p>
                </div>
                <div className='col p-5 text-muted'>
                    <p>
                        In addition, we run a number of popular open online
educational and community initiatives to empower retail
traders and investors.
                    </p>
                    <p>
                        <a style={{textDecoration: "none"}} href='#'>Rainmatter</a>, our fintech fund and incubator, has invested
in several fintech startups with the goal of growing the
Indian capital markets.
                    </p>
                    <p>
                        And yet, we are always up to something new every day.
Catch up on the latest updates on our blog or see what
the media is saying about us.
                    </p>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
     );
}

export default Hero;