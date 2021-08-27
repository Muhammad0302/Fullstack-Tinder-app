import React from 'react'
import ReplyIcon from '@material-ui/icons/Reply';
import RefreshIcon from '@material-ui/icons/Refresh';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButton.css'
function SwipeButtons() {
    return (
        <div className="swipebuttons">
            <IconButton style={{color: "#ffbf00"}}>
            <RefreshIcon fontSize="large" />
            </IconButton>
            <IconButton style={{color: "#660000"}}>
            <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton style={{color: "#33adff"}}>
            <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton style={{color: "#80ffcc"}}>
            <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton style={{color: " #660066"}}>
            <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
