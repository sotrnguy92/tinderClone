import React from 'react';
import '../styles/Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@material-ui/core/IconButton'
import logo from '../resources/tinder_logo.png'
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img
                className="header_logo"
                 src={logo}
                 alt="tinder_logo"
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>


        </div>
    );
};

export default Header;
