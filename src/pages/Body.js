import { Avatar } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import './PostInputer.css'
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


function Body() {
    const [file, setfile] = useState()
    const [clicked, setclicked] = useState(null)
    // const [{user,publicUsers},dispatch] = useStateValue()
    const [text, settext] = useState(null)
    const [image, setimage] = useState(null)
    const [hide, sethide] = useState('')
    const [posts, setposts] = useState([])
    const [fId, setfId] = useState([])
    const [photo, setphoto] = useState(null)
    const [videoContainer, setvideoContainer] = useState(null)

    const postText = (e) => {
        settext(e.target.value)
    }
    const submitPost = (e) => {
        e.preventDefault()
        if(image&&text){

            const data = new FormData()
            // data.append("avater",user.photoURL)
            data.append("status",text)
            // data.append("UserName",user.displayName)
            data.append("file",image)
            Axios.post("/posts",data,{
            })

        }
        else{
            alert('Please enter')
        }
        sethide(null)
        setimage(null)
        settext(null)
        setphoto(null)
        setvideoContainer(null)
    }
    // useEffect(() => {
    //     db.collection('posts').onSnapshot((snapShot) => {
    //         setfId(snapShot.docs.map(doc => doc.id))
    //     })
    //     }, [])
    const hideModal = () => {
        sethide(null)
        setimage(null)
        settext(null)
        setphoto(null)
        setvideoContainer(null)
    }
    const openModal = () => {
        sethide("open")
        setphoto("clicked")
        setvideoContainer(null)
    }
    useEffect(() => {
        const fecthData = async () => {
            await Axios.get("/sync")
                .then((playload) => {
                    setposts(playload.data);
                });
        };
        fecthData();

    }, [posts]);
    const vidRef = useRef(null);
    const handlePlayVideo = () => {
      vidRef.current.play();
    }

    return (
        <div className="linkdin__home">
 {hide?    ( <>
            <div className="sideBar__modal">
                <div className="modal__container">
                    <div>
                    <div className="home__container__inputer">
                    <div className="home__container__inputer__avater">
                        <div ><Avatar /></div>
                        <div className="home__container__inputer__self"><input placeholder="write something" onChange={postText}/></div>
                    </div>
                    <div className="home__container__file__inputer__icon">
                        
                        <label onClick={()=>{
                            setphoto("clicked")
                             setvideoContainer(null)
                    }} className="label" htmlFor="file"><div ><ImageIcon /> <a className="home__a2"> Photo</a></div></label>
                        <label onClick={()=>{
                            if(videoContainer&&image){
                                setvideoContainer("null")
                                setimage('')
                            }
                            setvideoContainer(null)
                            setphoto(null)

                        }} className="label" htmlFor="file"><div ><OndemandVideoIcon /> <a className="home__a2"> Video</a></div></label>
                        <label className="label"><div ><EventIcon /> <a className="home__a2"> Event</a></div></label>
                        <label className="label" className="label" ><div ><ArticleIcon /> <a className="home__a2"> Article</a></div></label>
                        {/* <div className='file__hidden'>
                            <input className='file__hidden' onClick={photoUpload} id="file" type="file"/>
                        </div> */}
                      </div>
                     </div>
                    </div>
                    <div>
                        <div className="">
                            <a>{text}</a>
                        </div>
                    </div>
                    <div>
                    {photo? (<div className="showImg__container"></div>):
                    (<div className="showImg__container">      
                       {image && <video width="100%" controls>
                            <source src={URL.createObjectURL(image)}/>
                        </video>}
                  </div>)}
                    </div>
                    <div className="button__container">
                     <div className="uploadButton" onClick={submitPost} ><a>Upload</a></div>
                     <div className="uploadButton__file" ><input type="file" id="file" onChange={(e)=>{setimage(e.target.files[0]) 
                        console.log(e.target.files[0])}} multiple /></div>
                    <div className="uploadButton danger" onClick={hideModal} ><a>Cencel</a></div>

                   </div>
                </div>

     
            </div>
            </>)  :

            ( <>
 
                <div className="home__container__middle">
                    <div className="home__container__inputer">
                        <div className="home__container__inputer__avater">
                            <div ><Avatar /></div>
                            <div  className="home__container__inputer__self"><input onClick={openModal} placeholder="write something"/></div>
                        </div>
                        <div className="home__container__inputer__icon">
                            
                            <div  onClick={openModal}><ImageIcon /> <a className="home__a"> Photo</a></div>
                            <div onClick={openModal}><OndemandVideoIcon /><a className="home__a"> Video</a></div>
                            <div><EventIcon /> <a className="home__a">Event</a></div>
                            <div><ArticleIcon /> <a className="home__a">Articale</a></div>
                            {/* <div className='file__hidden'>
                                <input className='file__hidden' onClick={photoUpload} id="file" type="file"/>
                            </div> */}
                        </div>
                    </div>
                    {/* this is the post  */}
 {posts.map((post)=>(
                    <PostMain _id={post._id} comment__box={post.comments}  Name={post.UserName} profileUrl={post.avater} textpost={post.status} imgageUrl={post.file} time={post.timestamp}/>
                   )) }
                </div>
                </>)
            }
        </div>
    )
}

export default Body
