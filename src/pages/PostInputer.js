import './PostInputer.css'
import { Avatar } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PostMain from './PostMain';
import { useStateValue } from './StateProvider';
import Axios from './Axios';


function PostInputer() {
    return (
        <div className="home__container__inputer">
        <div className="home__container__inputer__avater">
            <div ><Avatar  /></div>
            <div  className="home__container__inputer__self"><input placeholder="write something"/></div>
        </div>
        <div className="home__container__inputer__icon">
            
            <div ><ImageIcon /> <a className="home__a"> Photo</a></div>
            <div ><OndemandVideoIcon /><a className="home__a"> Video</a></div>
            <div><EventIcon /> <a className="home__a">Event</a></div>
            <div><ArticleIcon /> <a className="home__a">Articale</a></div>
            {/* <div className='file__hidden'>
                <input className='file__hidden' onClick={photoUpload} id="file" type="file"/>
            </div> */}
        </div>
    </div>
    )
}

export default PostInputer
