import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 border-bottom'>
                <h1>Pricing</h1>
                <p className='mt-4 mb-5'>Free equity investments and flat 720 traday and F&O trades</p>
            </div>
            <div className='row mt-5 mb-5  text-center'>
                <div className='col-4'>
                    <img src='/media/Images/pricing0.svg' />
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p style={{width: "90%"}}>All equity delivery investments (NSE, BSE),are absolutely free - 7 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='/media/Images/intradayTrades.svg' />
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p style={{width: "90%"}}>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className='col-4'>
                    <img src='/media/Images/pricing0.svg' />
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p style={{width: "90%"}}>All direct mutual fund investments are absolutely free - F 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;