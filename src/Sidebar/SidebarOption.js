import React from 'react'
// import { Link } from 'react-router-dom'
const SidebarOption = ({active,icon, text}) => {

    return (
        <>
            {/* <Link to='#' style={{ textDecoration: 'none' }}> */}
            <div className={`sidebar-data ${active && 'sidebar-data--active'}`}>
                <div className='sidebar-icons'>{icon}</div>
                <h2 className='sidebar-text'>{text}</h2>
            </div>
            {/* </Link> */}
        </>
    )
}

export default SidebarOption
