import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <footer style={{backgroundColor: "rgb(250,250,250)"}}>
    <div className='container bg-light border-top'>
        <div className='row mt-5'>
            {/* <div className='col-1'></div> */}
            <div className='col bg-light'>
                <img style={{width: "50%"}} src='media/Images/logo.png' />
                <p>&copy; 2010 - 2024, Stokro Broking Ltd. <br/>
All rights reserved.</p>
                <div>
                    <Link to='/' style={{textDecoration: "none"}} > <i class="fa-brands fa-twitter text-muted"></i> </Link>
                &nbsp;&nbsp;
                <Link to='/' style={{textDecoration: "none"}}> <i class="fa-brands fa-facebook text-muted"></i> </Link>
                &nbsp;&nbsp;
                <Link to='/' style={{textDecoration: "none"}}> <i class="fa-brands fa-instagram text-muted"></i> </Link>
                &nbsp;&nbsp;
                <Link to='/' style={{textDecoration: "none"}}> <i class="fa-brands fa-linkedin text-muted"></i> </Link>
                &nbsp;&nbsp;
                <Link to='/' style={{textDecoration: "none"}}> <i class="fa-brands fa-telegram text-muted"></i> </Link>
                </div>
            </div>
            <div className='col'>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Company</Link></div>
                <div className='text-muted mb-3'><Link to='/about' class="link-secondary link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>About</Link></div>
                <div className='text-muted mb-3'><Link to='/product' class="link-secondary link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Products</Link></div>
                <div className='text-muted mb-3'><Link to='/pricing' class="link-secondary link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Pricing</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Referral programme</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Careers</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Stokro.Tech</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Press & media</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Stokro cares (CSR)</Link></div>
            </div>
            <div className='col'>
                <div className='text-muted mb-3'><Link to='/support' class="link-secondary  link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Support</Link></div>
                <div className='text-muted mb-3'><Link to='/about' class="link-secondary  link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Contact</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary  link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Support portal</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary  link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>S-connect blog</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary  link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>List of charges</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary  link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Downloads & resources</Link></div>
                <div className='text-muted mb-3'></div>
            </div>
            <div className='col'>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary  link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Account</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary  link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Open an account</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary  link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>Fund transfer</Link></div>
                <div className='text-muted mb-3'><Link to='/' class="link-secondary  link-opacity-75 link-opacity-100-hover" style={{textDecoration: "none"}}>60 day challenge</Link></div>
            </div>
            <div className='col-1'></div>
        </div>
        <div className='row mt-4 text-muted'>
            Stokro Technologies Pvt. Ltd. provides an online platform for investing and market tracking. Equity and related services are offered through Stokro Broking Services (proposed), and commodities services may be offered through Stokro Commodities Pvt. Ltd. (proposed). Our registered office is located at #221, 5th Cross Road, Tech Park Area, Bengaluru – 560076, Karnataka, India.Users are advised to carefully read all risk disclosure documents and terms before investing. For any grievances related to securities services, you may contact our support team or escalate the matter through the SEBI SCORES portal using mandatory details such as Name, PAN, Address, Mobile Number, and Email ID. Investments in the securities market are subject to market risks; please invest responsibly.
        </div>
    </div>
    </footer>
    );
}

export default Footer;