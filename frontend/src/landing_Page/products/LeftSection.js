import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, LearnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row mb-5'>
                <div className='col-6'>
                    <img src={imageURL} />
                </div>
                <div className='col-5 p-5'>
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div className='mb-5' >
                    <a style={{textDecoration: "none"}} href={tryDemo}>Try Demo</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a style={{textDecoration: "none"}} href={LearnMore}>Learn More</a>
                    </div>
                    <div>
                    <a href={googlePlay}><img src='/media/Images/googlePlayBadge.svg'/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href={appStore}><img src='/media/Images/appStoreBadge.svg'/></a>
                    </div>
                </div>
                <div className='col-1'>

                </div>
            </div>
        </div>
     );
}

export default LeftSection;