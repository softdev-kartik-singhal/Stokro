import React from 'react';

function Brokerage() {
    return ( 
        <div className='container border-top mb-5'>
            <div className='row mt-5'>
                <div className='col-9'>
                        <h1 className='fs-4 text-center' style={{color: "#387ED1"}}>Brokerage calculator</h1>
                        <ul className='mt-4 text-muted'>
                            <li className='fs-6 mb-3'>Call & Trade and RMS auto-squareoff: Additional charges of &#8377;50 + GST per order.</li>
                            <li className='fs-6 mb-3'>Digital contract notes will be sent via e-mail.</li>
                            <li className='fs-6 mb-3'>Physical copies of contract notes, if required, shall be charged &#8377;20 per contract note. Courier charges apply.</li>
                            <li className='fs-6 mb-3'>For NRI account (non-PIS), 0.5% or &#8377;100 per executed order for equity (whichever is lower).</li>
                            <li className='fs-6 mb-3'>For NRI account (PIS), 0.5% or &#8377;200 per executed order for equity (whichever is lower).</li>
                            <li className='fs-6 mb-3'>If the account is in debit balance, any order placed will be charged &#8377;40 per executed order instead of &#8377;20 per executed order.</li>
                        </ul>
                </div>
                <div className='col text-center'>
                        <h1 className='fs-4' style={{color: "#387ED1"}}>List of charges</h1>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;