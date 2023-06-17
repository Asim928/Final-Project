import React from 'react'
import './Header.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Logo from '../../images/heartbeat.gif'

const Header = () => {

  return (
    <>
      <Helmet>
        <title>ProHost</title>
      </Helmet>
      <section className='nav'>
        <div className="first_nav">
          <div className="container">
            <div className="first_nav_left">
              <PhoneIcon />
              <p> Need help? Call Us Now :</p>
              <p className='num'> 1800 456 7890 </p>
            </div>
            <div className="first_nav_right">
              <ul>
                <li>
                  <Link className='link' to='/about'>Our Story</Link>
                </li>
                <li>
                  <Link className='link' to='/blog'>News & Articles</Link>
                </li>
                <li>
                  <Link className='link' to='/contact'>Franchies Opportunity</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sec_nav">
          <div className="container">
            <div className="sec_nav_left">
              <div className="sec_nav_left_logo">
                <img src={Logo} alt="" className='logo' />
                <h2>ProHost</h2>
              </div>
            </div>
            <div className="sec_nav_right">
              <ul>
                <li>
                  <Link className='Link' to='/'>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <div className="dropdown">
                    <p className="dropbtn">About</p>
                    <div className="dropdown-content">
                      <Link to='/about'>About Us</Link>
                      <Link to='/team'>Our Team</Link>
                      <Link to='/faq'>FAQ's</Link>
                      <Link to='/testimonial'>Testimonial</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown">
                    <p className="dropbtn">Services</p>
                    <div className="dropdown-content">
                      <Link to='/ambulatory'>Ambulatory</Link>
                      <Link to='/checkup'>Check Up</Link>
                      <Link to='/medicalCare'>Home health care</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to='/blog' className='Link'>Articles</Link>
                </li>
                <li>
                  <Link to='/contact' className='Link'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Header
