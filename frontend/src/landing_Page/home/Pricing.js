import React from 'react';

function Pricing() {
    return ( 
    <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <h1 className=' mb-3 fs-2'>Unbeatable pricing</h1>
                <br/> <br/>
                <p>We pioneered the concept of discount broking and price
transparency in India. Flat fees and no hidden charges.</p>
                <br/>
                <a href='/' style={{textDecoration: "none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className='col-2'></div>

            <div className='col-6'>
                <div className='row text-center'>
                    <div className='col-6 p-2 border' style={{width: "50%"}}>
                        <h1 className='mt-4'>&#8377;0</h1>
                        <p className='p-4'>Free equity delivery and <br/>
direct mutual funds</p>
                    </div>
                    <div className='col-6 p-2 border' style={{width: "50%"}}>
                        <h1 className='mt-4'>&#8377;20</h1>
                        <p className='p-4'>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Pricing;