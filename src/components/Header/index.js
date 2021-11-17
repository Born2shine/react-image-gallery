import React from 'react'

import { BsDot } from "react-icons/bs"
import { FaBell, FaHeart, FaCommentAlt } from "react-icons/fa"
import { MdOutlineKeyboardArrowDown, MdOutlineSearch, MdArrowDropUp} from "react-icons/md"
import avatar from "../../assets/images/avatars/Jab.png"

import { useGloabalContext } from '../../provider/context'

const Header = () => {
    const { isOpenModal, 
            toggleNotificationModal,
            queryData, 
            onInputChange,
            searchPhotoHandler } = useGloabalContext();
    return (
        <header>
          <div className="search-bar">
            <div className="search">
              <span className="search-icon"><MdOutlineSearch/></span>
              <input className="search-field" 
              value={queryData}
              type="text" 
              onChange={(e) => onInputChange(e)}
              placeholder="Find Something..." />
              <button onClick={searchPhotoHandler} className="btn btn-primary btn-search"> Search </button>
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
    )
}

export default Header
