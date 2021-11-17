import { useEffect, useState } from "react";
import { FaHeart,FaMapMarkerAlt, FaThumbsDown } from "react-icons/fa"
import avatar from "../../../assets/images/avatars/Jab.png"
import Loader from "../../../assets/images/loader.gif"
import { useGloabalContext } from "../../../provider/context";

const Photos = () => {
  const [currentPhotos, setcurrentPhotos] = useState([])
  const { queryData, searching} = useGloabalContext()
  
  const [photos, setPhotos] = useState([])
  const [loading, setLoading, setSearching] = useState(false)

  const CLIENT_ID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
  const MAIN_Url = `https://api.unsplash.com/photos`
  const SEARCH_URL = `https://api.unsplash.com/search/photos`

  const fetchPhotos = async () => {
    let url;
    // url = `${MAIN_Url}/${CLIENT_ID}`
    const queryURL = `?query=${queryData}`
    if(queryData){
      url = `${MAIN_Url}/${CLIENT_ID}&${queryURL}`
    }else{
      url = `${MAIN_Url}/${CLIENT_ID}`
    }
    try {
        setLoading(true)
        const res = await fetch(`${url}`)
        const data =  await res.json()
        console.log(data);

        setPhotos(data)
        setLoading(false)
        setSearching(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
  useEffect(() =>{
      fetchPhotos()
  },[])

  useEffect(() => {
    if(queryData){
      fetchPhotos()
    }
  }, [searching])

    return (
        <section className="photo-wrapper">
          {
            loading ? (
              <div className="loader">Loading...   </div>
            ) : (
              <div className="photos">
              {
               photos && photos.map((photo)=> {
                  return (
                      <div className="single-photo" key={photo.id}>
                      <div className="slider">
                        <div className="slides">
                          <span className="slide current-slide"></span>
                          <span className="slide"></span>
                          <span className="slide"></span>
                          <span className="slide"></span>
                        </div>
                      </div>
                      <img src={photo.urls.regular} alt={photo.alt_description} />
                      <div className="info">
                        <div className="name">{photo.user.first_name}, {photo.likes}</div>
                        <span className="address"><FaMapMarkerAlt/> {photo.user.location ? photo.user.location : 'Not Available'}</span>
                      </div>
                      <div className="react">
                        <div className="details">
                          <div className="name">{photo.user.first_name}, {photo.likes}</div>
                          <span className="address"><FaMapMarkerAlt/> {photo.user.location ? photo.user.location : 'Not Available'}</span>
                        </div>
                        <div className="react-btn">
                          <a href="#" className="btn btn-danger"><FaHeart/></a>
                          <a href="#" className="btn btn-primary"><FaThumbsDown/></a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            )
          }
        
        </section>
    )
}

export default Photos