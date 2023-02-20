import React, {useState} from 'react'
import {SiDatabricks} from 'react-icons/si'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div className='navbar' id='navbar'>
        <div className='container'>
            <div className='logo'>
                <SiDatabricks className='icon' />
                <h1>Secured</h1>
            </div>

            <ul className={nav ? "nav-menu active" : "nav-menu"}>
                <li className='navbar-links'><a href='#hero'>Home</a></li>
                <li className='navbar-links'><a href='#data'>Recovery</a></li>
                <li className='navbar-links'><a href='#cloud'>Cloud</a></li>
                <li className='navbar-links'><a href='#social'>Social</a></li>
                <li className='navbar-links'><Link to='/contact'>Contact</Link></li>
                <button>Sign in</button>
            </ul>
            <div className='hamburger' onClick={handleNav}>
                {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
            </div>
        </div>
    </div>
  )
}

export default Navbar