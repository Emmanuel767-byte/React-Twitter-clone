import React from 'react';
import styled from 'styled-components';
import './sidebar.css'

const SidebarOptions = ({text, Icon,active}) => {

   
    const H2 = styled.h2`
    font-weight: 800;
    font-size:20px;
    `
    return (
        <div className={`sidebar_Options ${active && "sidebarOptions--active"}`}>
            <Icon/>
            <H2 className>{text}</H2>
        </div>
    )
}

export default SidebarOptions
