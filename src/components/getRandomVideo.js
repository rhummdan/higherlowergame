import { useEffect, useState } from "react";
import {YouTubeVideo} from './displayVideo';
import axios from "axios";



export const RandomVideo = () => {

    // const [videoViews, setVideoViews] = useState(0);
    const [videoTitle, setVideoTitle] = useState("");
    const [videoViews, setVideoViews] = useState();
    const [videoId, setVideoId] = useState();
    
    

    useEffect(() => {
        try {
            axios.get("http://randomvidapi.com/videodetails").then((res) => {
                setVideoTitle(res.data["title"]);
                setVideoViews(res.data["views"]);
                setVideoId(res.data["video_id"]);
            })
        } catch(error) {
            console.log(error)
        }
    }, []);


    
    return (
        <div className='video1'>
            <YouTubeVideo videoId = {videoId} title = {videoTitle} views = {videoViews}/>         
        </div>
    );
}