import { useEffect, useState } from "react";
import { FaHeart,FaMapMarkerAlt, FaThumbsDown } from "react-icons/fa"
import { useGloabalContext } from "../../../provider/context";

const Photos = () => {
  const { queryData, searching, setSearching, setqueryData} = useGloabalContext()
  
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  const CLIENT_ID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
  const MAIN_URL = `https://api.unsplash.com/photos`
  const SEARCH_URL = `https://api.unsplash.com/search/photos`

  const fetchPhotos = async () => {
    let url;
    // url = `${MAIN_Url}/${CLIENT_ID}`
    const queryURL = `query=${queryData}`
    if(queryData){
      url = `${SEARCH_URL}/${CLIENT_ID}&${queryURL}`
    }else{
      url = `${MAIN_URL}/${CLIENT_ID}`
    }
    try {
        setLoading(true)
        const res = await fetch(`${url}`)
        const data =  await res.json()
        console.log(data);
        if(queryData){
          setPhotos(data.results)
          setSearching(false)
          setqueryData('')
        }else{
          setPhotos(data)
        }
        setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
  useEffect(() =>{
      fetchPhotos()
  },[searching])

  // useEffect(() => {
  //   if(queryData){
  //     fetchPhotos()
  //   }
  // }, [])

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