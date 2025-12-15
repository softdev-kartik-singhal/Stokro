import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col' style={{marginTop: "8rem"}}>
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;