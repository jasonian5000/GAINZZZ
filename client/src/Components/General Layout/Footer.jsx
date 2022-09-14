import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/footer.css'

const Footer = () => {
  return (
      <footer className='footer'>
          <div className='footer-container'>
              <div className='row'>
                  <div className='footer-col'>
                      <h4>Company</h4>
                      <ul>
                          <li><Link to={'/'}>About Us</Link></li>
                          <li><Link to={'/'}>Services</Link></li>
                          <li><Link to={'/'}>Privacy</Link></li>
                          <li><Link to={'/'}>Programs</Link></li>
                      </ul>
                  </div>
                  <div className='footer-col'>
                      <h4>Get Help</h4>
                      <ul>
                          <li><Link to={'/'}>FAQ</Link></li>
                          <li><Link to={'/'}>Contact Us</Link></li>
                          <li><Link to={'/'}>Support</Link></li>
                          <li><Link to={'/'}>Payment</Link></li>
                      </ul>
                  </div>
                  <div className='footer-col'>
                      <h4>Links</h4>
                      <ul>
                            <li><Link to={'/'}>Register</Link></li>
                          <li><Link to={'/'}>Sign in</Link></li>
                          <li><Link to={'/'}>Trainers</Link></li>
                          <li><Link to={'/'}>Home</Link></li>
                      </ul>
                  </div>
                  <div className='footer-col'>
                      <h4>Follow Us!</h4>
                      <ul>
                            <li><Link to={'/'}>FB</Link></li>
                          <li><Link to={'/'}>INSTA</Link></li>
                          <li><Link to={'/'}>Twitter</Link></li>
                          <li><Link to={'/'}>LinkedIN</Link></li>
                      </ul>
                  </div>
              </div>
          </div>
    </footer>
  )
}

export default Footer