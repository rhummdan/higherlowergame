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

    let num = parseInt(videoViews, 10);
    
    return (
        <div>
            <YouTubeVideo videoId = {videoId}/>
            <h1>{videoTitle}</h1>
            {videoViews > 100 ?  <p>{videoViews}</p> : <p>not</p>}
           
            
        </div>
    );
}