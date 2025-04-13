import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/infinity.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import star from '../../assets/star.png'
import menu_open from '../../assets/menu.png'
import menu_close from '../../assets/close.png'

const Navbar = () => {
    const [menu, setMenu] = useState("");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = '0';
    }
    const closeMenu = () => {
        menuRef.current.style.right = '-350px';
    }
    return (
        <div id='navbar' className='navbar'>
            <img src={logo} alt=" " />
            <img src={menu_open} onClick={openMenu} alt="open Menu " className='nav-mob-open' />


            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt=" " className='nav-mob-close' />
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={star} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={star} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={() => setMenu("projects")}>My Projects</p></AnchorLink>{menu === "projects" ? <img src={star} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#certifications'><p onClick={() => setMenu("certifications")}>Certifications</p></AnchorLink>{menu === "certifications" ? <img src={star} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={star} alt='' /> : <></>}</li>
            </ul>
            <div className='nav-connect'>Connect With Me</div>

        </div>
    )
}

export default Navbar