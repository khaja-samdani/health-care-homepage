import React from 'react'
import doctor from './assets/doctor.jpg'
import tablets from './assets/tablets.jpg'
import lab from './assets/lab.jpg'


const Header = () => {
    return (
        <header className='bg-color'>
            <div className='wrapper1'>
                <div>
                    <img src={doctor} />
                    <p>Consult a Doctor</p>
                </div>
                <div >
                    <img src={tablets} />
                    <p>Order Medicine</p>
                </div>
                <div >
                    <img src={lab} />
                    <p>Book for Diagnostic</p>
                </div>
                <div>
                    <span className='icons'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-square-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </span>
                </div>
            </div>
            <div className='logo'>
                <h1>Logo</h1>
                <div className='button'>
                    <button>Login|Signup</button>
                    <div className='cart'>
                        <i class="fa-solid fa-cart-shopping"><sup>0</sup></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header