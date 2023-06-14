import React from 'react'
import './Header.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Logo from '../../images/heartbeat.gif'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
                  <Link className='link' to='/'>Home</Link>
                </li>
                <li>
                  <Link className='link' to='/about'>
                      <Typography
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                      >
                        About US
                      </Typography>
                      <Popover
                        id="mouse-over-popover"
                        sx={{
                          pointerEvents: 'none',
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                      >
                        <Typography sx={{ p: 1 }}></Typography>
                      </Popover>
                  </Link>
                </li>
                <li>
                  <Link className='link' to='/services'> Types Of Services</Link>
                </li>
                <li>
                  <Link className='link' to='/blog'>Knowledge Center</Link>
                </li>
                <li>
                  <Link className='link' to='/contact'>Contact</Link>
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
