import React, { useContext, useState } from 'react'

const AppContext = React.createContext(); 

const AppProvider = ({children}) => {
    const [sideNavOpen, setSideNavOpen] = useState(false)
    const [isOpenModal, setOpenModal] = useState(false)
    const [searching, setSearching] = useState(false)
    const [queryData, setqueryData] = useState('')

    const toggleSideNav = () => setSideNavOpen(!sideNavOpen)
    const toggleNotificationModal = () => setOpenModal(!isOpenModal)
    const onInputChange = (e) => setqueryData(e.target.value)

    const searchPhotoHandler = () => setSearching(true)

    return (
        <AppContext.Provider value={{
            sideNavOpen,
            isOpenModal,
            queryData,
            searching,
            setSearching,
            setqueryData,
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
