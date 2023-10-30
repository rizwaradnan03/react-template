import React from 'react'
import SideBar from './SideBar'

const Layout = (props) => {
    return (
        <>
            <SideBar>
                <div className="container">
                    {props.children}
                </div>
            </SideBar>
        </>
    )
}

export default Layout