import React from 'react';
import styled from 'styled-components';

const SidebarOptions = ({text, Icon}) => {

    const sidebar_Options =  styled.div`
  

    display: flex;
    align-items: center;
    cursor: pointer;

    .sidebarOptions:hover {
        background-color: #e8f5fe;
        border-radius: 30px;
        color:var(--twitter-color);
        transition: color 100ms ease-out;
    }
    .sidebarOptions > .MuiSvgIcon-root{
        padding: 20px;
    }
    
    
    `
    const H2 = styled.h2`
    font-weight: 800;
    font-size:20px;
    margin-right:20px;
    `
    return (
        <sidebar_Options className="sidebarOptions">
            <Icon/>
            <H2>{text}</H2>
        </sidebar_Options>
    )
}

export default SidebarOptions
