import { useEffect, useState } from "react";
import { useGloabalContext } from "../../../provider/context";
import SinglePhoto from "../SinglePhoto";

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
                      <SinglePhoto key={photo.id} photo={photo}/>
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