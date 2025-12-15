import React from 'react';
function Awards() {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p mb-5>2+ million Stokro clients contribute to over 15% of all retail order
volumes in India daily by trading and investing in:</p>
                    <div className='row mt-5 mb-5'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    Futures and Options
                                </li>
                                <li>
                                    Commodity derivatives
                                </li>
                                <li>
                                    Currency derivatives
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    Stocks & IPOs
                                </li>
                                <li>
                                    Direct mutual funds
                                </li>
                                <li>
                                    Bonds and Govt. Securities
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width: "90%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;