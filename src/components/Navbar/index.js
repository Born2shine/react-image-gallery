import React from 'react'


import { MdBarChart, MdOutlineGroups, } from "react-icons/md"
import { GiChurch, GiPartyPopper, GiPikeman } from "react-icons/gi"
import { BsLink45Deg } from "react-icons/bs"
import { FaHome, FaEnvelope, } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { useGloabalContext } from '../../provider/context'

const Navbar = () => {

    const {sideNavOpen, toggleSideNav} = useGloabalContext()

    return (
    <div className={`sidenav ${sideNavOpen ? 'translateZero' : ''}`}>
            <div className="close-menu" onClick={toggleSideNav}>
              <span className="close-icon"><MdClose/></span>
            </div>
          <div className="logo">
            bluecube
          </div>
            <nav className="navbar">
            <ul className="links">
            <li className="link active"><span className="link-icon"><FaHome/></span><a href="#">Home</a></li>
            <li className="link"><span className="link-icon"><FaEnvelope/></span><a href="#">Message</a></li>
            <div className="sub-title">Share</div>
            <li className="link"><span className="link-icon"><MdBarChart/></span><a href="#">Ranking</a></li>
            <li className="link"><span className="link-icon"><GiChurch/></span><a href="#">Challenge</a></li>
            <li className="link"><span className="link-icon"><GiPartyPopper/></span><a href="#">Party</a></li>
            <li className="link"><span className="link-icon"><BsLink45Deg/></span><a href="#">Connect</a></li>
            <li className="link"><span className="link-icon"><MdOutlineGroups/></span><a href="#">Parade</a></li>
            <li className="link"><span className="link-icon"><GiPikeman/></span><a href="#">Group</a></li>
            </ul>
        </nav>
      </div>
    )
}

export default Navbar
