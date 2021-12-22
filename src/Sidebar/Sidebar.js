import React from 'react'
import SidebarOption from './SidebarOption'
import "./Sidebar.css"
import Button from '@mui/material/Button';

const Sidebar = () => {
    return (
        <>
          <section className='sidebar'>
            <SidebarOption icon={<i class="fab fa-twitter"></i>} /> 
            <SidebarOption active icon={<i class="fas fa-home"></i>} text= "Home"/> 
            <SidebarOption icon={<i class="fas fa-hashtag"></i>} text= "Explore"/> 
            <SidebarOption icon={<i class="far fa-bell"></i>} text= "Notification"/> 
            <SidebarOption icon={<i class="far fa-bookmark"></i>} text= "Bookmark"/> 
            <SidebarOption icon={<i class="fas fa-list"></i>} text= "Lists"/> 
            <SidebarOption icon={<i class="far fa-user"></i>} text= "Profile"/> 
            <SidebarOption icon={<i class="fas fa-ellipsis-h"></i>} text= "More"/> 
            
            <Button className='tweet--button'>Tweet</Button>
          </section>          
        </>
    )
}

export default Sidebar