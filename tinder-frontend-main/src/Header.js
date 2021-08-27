import React from 'react' 
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import './header.css'
function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>         
           <img src="./image/Tinder-Logo-PNG4.png" alt="tinder-logo" className="header__logo" />
           <IconButton>
            <ForumIcon className="header__icon" />
            </IconButton>  
        </div>
    )
}

export default Header
