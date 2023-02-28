import React, { useState } from 'react'
import {FaTimes , FaBars} from 'react-icons/fa'
import '../Component/Navbar.css'
import Mobirey_logo from  '../Assets/Mobirey-Logo.png'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <div>
                    <img src={Mobirey_logo} className='Logo' alt='' />
                </div>
                <div className='list'>
                    <div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                            <a>Services</a>
                              
                            </li>
                            <li>
                            <a>About</a>
                            </li>
                            <li>
                            <a>Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>



                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar