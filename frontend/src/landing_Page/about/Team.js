import React from 'react';

function Team() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <h1 className='text-center mt-5 mb-5'>Developer</h1>
            </div>
            <div className='row mt-5'>
                <div className='col-2'></div>
                <div className='col'>
                    
                    <img className='mb-4' style={{width: "70%", borderRadius: "50%"}} src='./media/Images/Dp.png' alt='Developer image' />
                    <div className='mb-5 fs-4 text-muted'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kartik Singhal</div>
                </div>
                <div className='col text-muted'>
                    <p>Kartik Singhal bootstrapped and founded Stokro in 2025 with a vision to make investing simpler, transparent, and accessible for everyone. After spending years navigating the challenges of the markets as a self-taught trader, he built Stokro to solve the very problems he once faced. Today, Stokro is growing into a platform that reimagines how new investors interact with the Indian markets.</p>
                    <p>Kartik contributes to industry discussions on financial inclusion and digital investment infrastructure, and actively collaborates with emerging fintech communities across India.</p>
                    <p>When he's not working on Stokro, Kartik finds his calm in long-distance running and weekend hikes.</p>
                    <p>Connect on &nbsp;
                     <a target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}} href='https://www.linkedin.com/in/kartik-singhal28/'>Linkedin</a> &nbsp; 
                     <a style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer" href="https://kartik-singhal-portfolio.onrender.com">Contact Me</a> &nbsp; 
                     <a href='https://drive.google.com/file/d/1SGMC09SCSvSVVfayV_TmA0bekkCfjuXL/view?usp=share_link' target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}} >Resume</a></p>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    );
}

export default Team;