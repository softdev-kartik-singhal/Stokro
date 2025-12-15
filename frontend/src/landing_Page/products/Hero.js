import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5'>
                <h1>Technology</h1>
                <p className='fs-5 mt-4 text-muted'>Sleek, modern and intuitive trading platforms</p>
                <p className='mb-5 text-muted'>Check out our <a href='#' style={{textDecoration: "none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
                <hr className='mt-5 mb-5'/>
            </div>
        </div>
     );
}

export default Hero;