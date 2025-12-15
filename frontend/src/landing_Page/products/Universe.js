import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center' style={{marginTop: "6rem"}}>
                <p>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            </div>
            <div className='row mt-5 text-center'>
                <h1 className='mb-4'>The Stokro Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row mt-5'>
                <div className='col-1'></div>
                <div className='col-2'>
                    <img src='/media/Images/smallcaseLogo.png' style={{width: "100%"}} />
                    <p className='text-muted mt-2 text-center' style={{fontSize: "0.8rem"}}>Thematic investment platform</p>
                    
                    <img className='mt-5' src='/media/Images/stokroFundhouse.png' style={{width: "100%"}} />
                    <p className='text-muted mt-2 text-center' style={{fontSize: "0.8rem"}}>Asset management</p>
                </div>
                <div className='col-2'></div>
                <div className='col-2'>
                    <img src='/media/Images/streakLogo.png' style={{width: "100%"}} />
                    <p className='text-muted mt-2 text-center' style={{fontSize: "0.8rem"}}>Algo & strategy platform</p>
                    
                    <img className='mt-5' src='/media/Images/goldenpiLogo.png' style={{width: "100%"}} />
                    <p className='text-muted mt-2 text-center' style={{fontSize: "0.8rem"}}>Bonds trading platform</p>

                    <button style={{width: "100%"}} className='btn btn-primary mt-5 mb-5'>Sign up now</button>
                </div>
                <div className='col-2'></div>
                <div className='col-2'>
                    <img src='/media/Images/sensibullLogo.svg' style={{width: "100%"}} />
                    <p className='text-muted mt-2 text-center' style={{fontSize: "0.8rem"}}>Options trading platform</p>
                    
                    <img className='mt-5' src='/media/Images/dittoLogo.png' style={{width: "100%"}} />
                    <p className='text-muted mt-2 text-center' style={{fontSize: "0.8rem"}}>Insurance</p>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
     );
}

export default Universe;