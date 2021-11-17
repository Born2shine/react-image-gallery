import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext(); 

const AppProvider = ({children}) => {
    const [sideNavOpen, setSideNavOpen] = useState(false)
    const [isOpenModal, setOpenModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [searching, setSearching] = useState(false)
    const [photos, setPhotos] = useState([])
    const [queryData, setqueryData] = useState('')

    const toggleSideNav = () => setSideNavOpen(!sideNavOpen)
    const toggleNotificationModal = () => setOpenModal(!isOpenModal)
    const onInputChange = (e) => setqueryData(e.target.value)

    const searchPhotoHandler = () => setSearching(true)

    return (
        <AppContext.Provider value={{
            sideNavOpen,
            isOpenModal,
            photos,
            queryData,
            searching,
            setSearching,
            onInputChange,
            toggleSideNav,
            toggleNotificationModal,
            searchPhotoHandler
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGloabalContext = () => useContext(AppContext); 
export {AppContext, AppProvider}
