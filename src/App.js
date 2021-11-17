import './assets/css/main.css'
import { FaHome,
         FaEnvelope, 
         FaBell, FaHeart,
         FaCommentAlt,
         FaMapMarkerAlt,
          FaThumbsDown } from "react-icons/fa"
import { MdBarChart,
         MdOutlineKeyboardArrowDown,
         MdOutlineSearch,
         MdOutlineGroups,
         MdArrowDropUp,
         MdClose } from "react-icons/md"
import { GiChurch, GiPartyPopper, GiPikeman } from "react-icons/gi"
import { BsLink45Deg, BsDot } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import avatar from "./assets/images/avatars/Jab.png"
import { useState } from 'react'

function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [isOpenModal, setOpenModal] = useState(false)

  const toggleSideNav = () => setSideNavOpen(!sideNavOpen)
  const toggleNotificationModal = () => setOpenModal(!isOpenModal)
  
  return (
    <div className="App">
      <div className="main-wrapper">
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
        <div className="main-content">
          <span className="menu-btn" onClick={toggleSideNav}><FiMenu/></span>
          <header>
            <div className="search-bar">
              <div className="search">
                <span className="search-icon"><MdOutlineSearch/></span>
                <input className="search-field" type="text" placeholder="Find Something..." />
                <button className="btn btn-primary btn-search"> Search </button>
              </div>
            </div>
            <div className="notification-wrapper">
              <div className="notification">
                <span className="notification-icon" onClick={toggleNotificationModal}>
                  <FaBell/>
                  <span className="counter">3</span>
                </span>
               
                <div className={`notification-modal ${isOpenModal ? '' : 'sr-only'}`}>
                  <span className="chevro-up"><MdArrowDropUp/></span>
                  {/* single message */}
                  <div className="single-message">
                    <img src={avatar} alt="avatar" />
                    <div className="message">
                      <span className="title">
                        Michael liked you!
                      </span>
                      <span className="time read">About 20 minutes ago</span>
                    </div>
                    <span className="like-icon read"><FaHeart/></span>
                  </div>
                   {/* end single message */}

                    {/* single message */}
                  <div className="single-message">
                    <img src={avatar} alt="avatar" />
                    <div className="message">
                      <span className="title">
                        Jack liked you!
                      </span>
                      <span className="time read">About 40 minutes ago</span>
                    </div>
                    <span className="like-icon liked"><FaHeart/></span>
                  </div>
                   {/* end single message */}

                    {/* single message */}
                  <div className="single-message">
                    <img src={avatar} alt="avatar" />
                    <div className="message">
                      <span className="title">
                        Martin commented on your photo!
                      </span>
                      <span className="time read">About 56 minutes ago</span>
                    </div>
                    <span className="like-icon comment"><FaCommentAlt/></span>
                  </div>
                   {/* end single message */}
                </div>
              </div>
              <div className="avatar">
                <img src={avatar} alt="avatar" />
                <span className="status">
                  <BsDot/>
                </span>
              </div>
              <div className="username">
                <span className="name">Abigail</span>
                <span className="has-children"><MdOutlineKeyboardArrowDown/></span>
              </div>
            </div>
          </header>
          <section className="filter-wrapper">
            <ul className="filters">
              <li className="filterBy">
                <span className="name">World</span>
                <span className="filter-icon"><MdOutlineKeyboardArrowDown/></span>
              </li>
              <li className="filterBy">
                <span className="name">Following</span>
                <span className="filter-icon"><MdOutlineKeyboardArrowDown/></span>
              </li>
              <li className="filterBy">
                <span className="name">Popular</span>
                <span className="filter-icon"><MdOutlineKeyboardArrowDown/></span>
              </li>
              <li className="filterBy">
                <span className="name">Post</span>
                <span className="filter-icon"><MdOutlineKeyboardArrowDown/></span>
              </li>
              <li className="filterBy">
                <span className="name">Gender</span>
                <span className="filter-icon"><MdOutlineKeyboardArrowDown/></span>
              </li>
              <li className="filterBy">
                <span className="name">Location</span>
                <span className="filter-icon"><MdOutlineKeyboardArrowDown/></span>
              </li>
              <li className="filterBy">
                <span className="name">Professional</span>
                <span className="filter-icon"><MdOutlineKeyboardArrowDown/></span>
              </li>
            </ul>
          </section>
          <section className="photo-wrapper">
            <div className="photos">
              {/* single photo */}
              <div className="single-photo">
                <div className="slider">
                  <div className="slides">
                    <span className="slide current-slide"></span>
                    <span className="slide"></span>
                    <span className="slide"></span>
                    <span className="slide"></span>
                  </div>
                </div>
                <img src={avatar} alt="avatar" />
                <div className="info">
                  <div className="name">Williams, 28</div>
                  <span className="address"><FaMapMarkerAlt/> New york</span>
                </div>
                <div className="react">
                  <div className="details">
                    <div className="name">Williams, 28</div>
                    <span className="address"><FaMapMarkerAlt/> New york</span>
                  </div>
                  <div className="react-btn">
                    <a href="#" className="btn btn-danger"><FaHeart/></a>
                    <a href="#" className="btn btn-primary"><FaThumbsDown/></a>
                  </div>
                </div>
              </div>
              {/* end single photo */}

              {/* single photo */}
              <div className="single-photo">
                <div className="slider">
                  <span className="current-slide"></span>
                </div>
                <img src={avatar} alt="avatar" />
                <div className="info">
                  <div className="name">Williams, 28</div>
                  <span className="address"><FaMapMarkerAlt/> New york</span>
                </div>
                <div className="react">
                  <div className="details">
                    <div className="name">Williams, 28</div>
                    <span className="address"><FaMapMarkerAlt/> New york</span>
                  </div>
                  <div className="react-btn">
                    <a href="#" className="btn btn-danger"><FaHeart/></a>
                    <a href="#" className="btn btn-primary"><FaThumbsDown/></a>
                  </div>
                </div>
              </div>
              {/* end single photo */}

              {/* single photo */}
              <div className="single-photo">
                <div className="slider">
                  <span className="current-slide"></span>
                </div>
                <img src={avatar} alt="avatar" />
                <div className="info">
                  <div className="name">Williams, 28</div>
                  <span className="address"><FaMapMarkerAlt/> New york</span>
                </div>
                <div className="react">
                  <div className="details">
                    <div className="name">Williams, 28</div>
                    <span className="address"><FaMapMarkerAlt/> New york</span>
                  </div>
                  <div className="react-btn">
                    <a href="#" className="btn btn-danger"><FaHeart/></a>
                    <a href="#" className="btn btn-primary"><FaThumbsDown/></a>
                  </div>
                </div>
              </div>
              {/* end single photo */}

              {/* single photo */}
              <div className="single-photo">
                <div className="slider">
                  <span className="current-slide"></span>
                </div>
                <img src={avatar} alt="avatar" />
                <div className="info">
                  <div className="name">Williams, 28</div>
                  <span className="address"><FaMapMarkerAlt/> New york</span>
                </div>
                <div className="react">
                  <div className="details">
                    <div className="name">Williams, 28</div>
                    <span className="address"><FaMapMarkerAlt/> New york</span>
                  </div>
                  <div className="react-btn">
                    <a href="#" className="btn btn-danger"><FaHeart/></a>
                    <a href="#" className="btn btn-primary"><FaThumbsDown/></a>
                  </div>
                </div>
              </div>
              {/* end single photo */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
