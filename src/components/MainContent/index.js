import { FiMenu } from "react-icons/fi"
import { useGloabalContext } from '../../provider/context'

import Header from "../Header"
import Photos from '../PhotoGallery/Photos'
import Filter from '../Filter'

const MainContent = () => {
    
    const { toggleSideNav } = useGloabalContext();
    
    return (
        <div className="main-content">
        <span className="menu-btn" onClick={toggleSideNav}><FiMenu/></span>
        <Header/>
        <Filter/>
        <Photos/>
      </div>
    )
}

export default MainContent
