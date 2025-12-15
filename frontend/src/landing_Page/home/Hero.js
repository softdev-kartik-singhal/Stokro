import React from 'react';

function Hero() {
    return ( 
    <div className='container p-5'>
        <div className='row text-center mb-5' >
            <img src='media/images/HomeHero.png' alt='Hero Image' className='mb-5' />
            <h1 className='mt-5'>Invest in Everything</h1>
            <p>Online Platform to invest in stocks, derivatives, mutual funds and more</p>
            <button className='p-3 mb-5 fs-5 btn btn-primary' style={{width: "20%", margin: "0 auto"}}>Signup Now</button>
        </div>
    </div>
    );
}

export default Hero;