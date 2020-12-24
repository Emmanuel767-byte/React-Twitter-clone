import React from 'react';
import {Button, Avatar} from "@material-ui/core"
import './Tweetbox.css';
export const Tweetbox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar/>
                    <input placeholder="New tweet?.." type="text"/>
                </div>
                <input className="tweetBox_imageInput" placeholder="Upload Image"/>
                <Button className="tweetBox_tweetBtn" variant="outlined">Tweet</Button>
            </form>
        </div>
    )
}
