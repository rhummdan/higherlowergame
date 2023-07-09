import { useEffect, useState } from "react";
import {YouTubeVideo} from './displayVideo';
import axios from "axios";



export const RandomVideo = ({setVideoId, setVideoTitle, setVideoViews}) => {
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
}