import React from 'react'
import './Header.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Logo from '../../images/heartbeat.gif'
import { Dropdown } from 'antd';

const Header = () => {
 const items = [
  {
    key:"1",
    label:(
      <Link to='/about'>About US</Link>
    )
  },
  {
    key:"2",
    label:(
      <Link to='/team'>Our Team</Link>
    )
  },
  {
    key:"3",
    label:(
      <Link to='/faq'>FAQ's</Link>
    )
  },
  {
    key:"4",
    label:(
      <Link to='/testimonial'>Testimonial</Link>
    )
  }
 ]

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
                    <Dropdown menu={{ items }} className='dropdown'>
                      <p>About</p>
                    </Dropdown>
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
