import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid' style={{backgroundColor: '#124145'}}>
            <div className='row mb-5'   >
                <div className='col-2'></div>
                <div className='col-4 mt-5 mb-5' style={{color: 'wheat'}}>
                    <p className='mb-5'>Support Portal</p>
                    <p className='fs-4'>Search for an answer or browse help topics to create a ticket</p>
                    <button type="button" class="btn btn-light mb-3 text-muted" style={{fontSize: "0.9rem", height: "4rem"}}>Eg: how do i activate F&O, why is my order getting rejected..</button>
                    <div>
                    <a href='#' style={{color: "whitesmoke", textDecoration: "none"}} >Track account opening</a> &nbsp;&nbsp;
                    <a href='#' style={{color: "whitesmoke", textDecoration: "none"}} >Track segment activation</a> &nbsp;
                    <a href='#' style={{color: "whitesmoke", textDecoration: "none"}} >Intraday</a>
                    </div>
                    <a href='#' style={{color: "whitesmoke", textDecoration: "none"}}>margins</a> &nbsp;&nbsp;
                    <a href='#' style={{color: "whitesmoke", textDecoration: "none"}}>Kite user manual</a>
                </div>
                <div className='col-1'></div>
                <div className='col-4 mt-5'>
                    <p className='mb-5 text-end'><a href='#' style={{color: "whitesmoke", textDecoration: "none"}}>Track Tickets</a></p>
                    <p className='fs-4' style={{color: "wheat"}}>Featured</p>
                    <ol style={{color: "whitesmoke"}}>
                        <li><a href='#' style={{color: "whitesmoke", textDecoration: "none"}}>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href='#' style={{color: "whitesmoke", textDecoration: "none"}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
     );
}

export default Hero;