import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions.js';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ViewListIcon from '@material-ui/icons/ViewList';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import {Button} from "@material-ui/core";
import './sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar">
                {/* Twitter icon */}
                Welcome Back user
                <TwitterIcon/>
                <br/>
                {/* Sidebar Options*/}
                <SidebarOptions active text="Home" Icon={HomeIcon}/>
                <SidebarOptions text="Explore" Icon={SearchIcon}/>
                <SidebarOptions text="Notification" Icon={NotificationsNoneIcon}/>
                <SidebarOptions text="My Messages" Icon={MailOutlineIcon}/>
                <SidebarOptions text="List" Icon={ViewListIcon}/>
                <SidebarOptions text="Home" Icon={TurnedInNotIcon}/>
                <SidebarOptions text="Profile" Icon={PermIdentityIcon}/>
                <SidebarOptions text="More.." Icon={MoreHorizIcon}/>
                {/* Sidebar Options*/}
                {/* Sidebar Options*/}
                {/* Sidebar Options*/}
                {/* Sidebar Options*/}
                <Button variant="outlined">Tweet</Button>
            {/* Button */}
        </div>
    )
}

export default Sidebar
