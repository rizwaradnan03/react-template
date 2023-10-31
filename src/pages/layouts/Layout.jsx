import React from 'react'
import SideBar from './SideBar'

const Layout = (props) => {
    return (
        <>
            <SideBar />
            <div className="col-md-9">
                {props.children}
            </div>
        </>
    )
}

export default Layout