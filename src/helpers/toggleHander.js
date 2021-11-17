import React, { useState } from 'react'

const ToggleHander = () => {
    const [sideNavOpen, setSideNavOpen] = useState(false)
    const toggleSideNav = () => setSideNavOpen(!sideNavOpen)


    return { sideNavOpen, setSideNavOpen, toggleSideNav}
}

export default ToggleHander
