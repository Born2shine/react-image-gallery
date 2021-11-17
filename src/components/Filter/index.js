import React from 'react'

import { MdOutlineKeyboardArrowDown} from "react-icons/md"

const Filter = () => {
    return (
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
    )
}

export default Filter
