import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='footer-details'>
                <ul>
                    <li>Quick Links</li>
                    <li>FAQ's</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <li>Services</li>
                    <li>Order Medicine</li>
                    <li>Lab Tests</li>
                    <li>Doctor Consultation</li>
                </ul>
                <ul>
                    <li>Our Policies</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>Cancellation Policy</li>
                </ul>
                <ul>
                    <li>Social</li>
                    <li>
                    <span>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-square-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </span>
                    </li>
                    <li>Need help?</li>
                    <li><span><i class="fa-solid fa-phone"></i> +9182063856</span></li>
                </ul>
                <ul>
                    <li>Our App</li>
                    <li className='apple'>
                        <button>
                        <div>
                        <i class="fa-brands fa-apple"></i>
                        </div>
                        <div>
                            <small>Download on the</small>
                            <p>App Store</p>
                        </div>
                        </button>
                    </li>
                    <li className='play-store'>
                    <button>
                        <div>
                        <i class="fa-brands fa-google-play"></i>
                        </div>
                        <div>
                            <small>Get it on</small>
                            <p>Google Play</p>
                        </div>
                        </button>
                    </li>
                </ul>
            </div>
            <div className='copyrights'>
                     <span><i class="fa-solid fa-copyright"></i>Company.All Rights Reserved</span>
                </div>
        </footer>
    </div>
  )
}

export default Footer