import React, { useEffect, useState } from 'react'



const FetchPhotos = () => {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    const CLIENT_ID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
    const MAIN_Url = `https://api.unsplash.com/photos`
    const SEARCH_URL = `https://api.unsplash.com/search/photos`

    let url;
    url = `${MAIN_Url}/${CLIENT_ID}`
    useEffect(() =>{
        try {
            setLoading(true)
            fetch(`${url}`)
            .then((res) => res.json())
            .then((data) => {
                setPhotos(data)
                setLoading(false)
                console.log(photos)
            })
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    },[])

    return {photos, loading}
}

export default FetchPhotos
