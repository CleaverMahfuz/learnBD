import React, { useEffect, useState } from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';
import "./PostMain.css"
import { Avatar } from '@mui/material';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import Axios from './Axios';

function PostMain({_id,id,comment__box, Name, profileUrl, textpost, imgageUrl, time}) {
	const [{authUser},dispatch] = useStateValue()
    const [comment, setcomment] = useState(null)
    const [like, setlike] = useState(0)
    const [clicked, setclicked] = useState(null)
    const [inputCommnet, setinputCommnet] = useState(null)
    const [dbCommenst, setdbCommenst] = useState([])
    const [singleComment, setsingleComment] = useState([])
    const [lonecomment, setlonecomment] = useState([])
    const [user, setuser] = useState('')
    const [imageUrl, setimageUrl] = useState(null)

    useEffect(() => {
        if(imgageUrl){
            setimageUrl(imgageUrl)
        }
    }, [])
 const postComment = () => {
    Axios.post("/upload/single/update", {
        id:_id,
        comments:inputCommnet,
        userProfile:authUser.photoURL,
        displayName:authUser.displayName,
      })
      .then(res => {
          // this.setState({ users: response.data });
          console.log(res);
      });
        // db.collection("posts").doc(id).collection('comments').add({
        //     userProfileUrl:user?.photoURL,
        //     userName:user?.displayName,
        //     comment:inputCommnet,
        // })
        // .then(res=>{console.log(res)})
        setcomment(null)
        setinputCommnet(null)
    }
    // useEffect(() => {
    //     const fecthData = async () => {
    //         await Axios.get("/sync")
    //             .then((playload) => {
    //                 setdbCommenst(playload.data);
    //             });
    //             setsingleComment(dbCommenst.map((com)=>(com.comments)))
    //             setlonecomment(singleComment.map(scomm=>(scomm.comment)))
    //     };
    //     fecthData();
    // }, []);
    return (
        <div className="post__container">
        <div className="post__header">
            <div className="post__logo" >
                <div><Avatar src={profileUrl} /></div>
                <div>
                    <div> 
                    <strong><a>{Name}</a></strong>
                   </div>
                   <div className="time__follwer__font">
                     <div> 
                        <a>Followers 23434+</a>
                     </div>
                      <div> 
                         <a>{time}</a>
                      </div>
                   </div>
                </div>
            </div>
            <div>
               <IconButton> <MoreHorizIcon /> </IconButton>
            </div>
        </div>
        <div className="status__field">
            <div className="status__field__status">
                <a> {textpost} </a>
            </div>
        </div>
        <div className="post__image__container">
            <div className="post__iamge">
                <img className="post__image__img" src={`images/${imgageUrl}`} />
            </div>
        </div>
        <div className="Post__footer">
            <div className="Post__react__container"> 
                <div className="Post__react">
                    <strong>like </strong>
                    <strong>Comment</strong>
{_id?  (<>        
          { comment__box.map((scomment)=> (
            <div className="comment__box">
            <div><Avatar src={scomment.userProfile} sx={{ width: 30, height: 30 }}/></div> 
            <div className="comment__box__p"><strong>{scomment.displayName}: </strong><a>{scomment.comment}</a></div>
            </div>
          ))  }
            </>):(<></>)}
{comment?           ( <div className="comment__box">
                        <div><Avatar src={authUser?.photoURL} sx={{ width: 30, height: 30 }}/></div> 
                        <div className="comment__box__p"><strong>{authUser.displayName}: </strong><a>{inputCommnet}</a></div>
                    </div>)
                :(<></>)    
                }
                </div>
                <div className="Post__react__logo">
                    <div  onClick={() => {
                        if(clicked){
                         setlike(like-1)
                         setclicked(null)}
                         else{
                        Axios.post('/likeAdd',{
                            id:_id,
                            userProfile:authUser.photoURL,
                            displayName:authUser.displayName,
                            react:"👍"
                        })
                        setlike(like+1)

                        setclicked("clicked")
                        }}} className="ThumbUpAltOutlinedIcon" >
                            {clicked?(<ThumbUpIcon/>):(<ThumbUpAltOutlinedIcon />)}<a className="__a"> like</a></div>
                    <div onClick={() => {if(comment){
                        setcomment(null)
                        setinputCommnet(null)
                    }else{setcomment("clicked")}}} className="commentting">{comment?(<ChatBubbleIcon/>):(<ChatBubbleOutlineIcon />)}<a className="__a"> Comment</a></div>
                    <div className="commenttingand__sharing"><ReplyOutlinedIcon /><a className="__a"> Share</a></div>
                </div>
            </div>
{comment?   ( <div className="comment__input__box">
                <div className="avater__avater"><Avatar sx={{ width: 34, height: 34 }} src={authUser?.photoURL} /></div>
               <div className="comment__input__box__input"><input type="text" placeholder="please write a comment " onChange={(e)=>{setinputCommnet(e.target.value)}}/></div>
               <div className="sendIcon"><IconButton onClick={postComment} ><SendIcon /></IconButton></div>
            </div>):
            (<></>)
            }
        </div>
    </div>
    )
}

export default PostMain
