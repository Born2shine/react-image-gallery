import React from 'react'
import { FaHeart,FaMapMarkerAlt, FaThumbsDown } from "react-icons/fa"

const SinglePhoto = ({photo}) => {
    const {likes, alt_description } = photo
    const {first_name, location} = photo.user

    return (
        <div className="single-photo">
            <div className="slider">
            <div className="slides">
                <span className="slide current-slide"></span>
                <span className="slide"></span>
                <span className="slide"></span>
                <span className="slide"></span>
            </div>
            </div>
            <img src={photo.urls.regular} alt={alt_description} />
            <div className="info">
            <div className="name">{first_name}, {likes}</div>
            <span className="address"><FaMapMarkerAlt/> {location ? location : 'Not Available'}</span>
            </div>
            <div className="react">
            <div className="details">
                <div className="name">{first_name}, {likes}</div>
                <span className="address"><FaMapMarkerAlt/> {location ? location : 'Not Available'}</span>
            </div>
            <div className="react-btn">
                <a href="#" className="btn btn-danger"><FaHeart/></a>
                <a href="#" className="btn btn-primary"><FaThumbsDown/></a>
            </div>
            </div>
        </div>
    )
}

export default SinglePhoto
