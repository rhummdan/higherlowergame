import { bool, boolean } from "yup";
import { RandomVideo } from "../components/getRandomVideo";
import { YouTubeVideo } from "../components/displayVideo";
import { useEffect, useState } from "react";
import Axios from "axios";
import { addDoc, collection } from 'firebase/firestore';
import {auth, db} from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';



export const Play = () => {

    //user data thats logged in
    const [user] = useAuthState(auth);
    //getting scores collection from db
    const scoresRef = collection(db, "scores");
    
    //data for the first video
    const [video1Title, setVideo1Title] = useState("");
    const [video1Views, setVideo1Views] = useState();
    const [video1Id, setVideo1Id] = useState();
    //data for the second video
    const [video2Title, setVideo2Title] = useState("");
    const [video2Views, setVideo2Views] = useState();
    const [video2Id, setVideo2Id] = useState();

    //state for the user's score
    const [score, setScore] = useState(0);
    

    //This variable will only be true to start the program off
    const [firstRound, setFirstRound] = useState(true);

    //adds user score to db. Function only called if user is logged in
    const addScore = async () => {
        await addDoc(scoresRef, {
            username: user?.displayName,
            score: score,
         })
    }

    const handleButtonClick = () => {
        if(checkHigher || checkLower) {
            setVideo1Id(video2Id);
            setVideo1Title(video2Title);
            setVideo1Views(video2Views);
            setFirstRound(false);
        }
        Axios.get("http://randomvidapi.com/videodetails").then((res) => {
            setVideo2Id(res.data["video_id"]);
            setVideo2Title(res.data["title"]);
            setVideo2Views(res.data["views"]);
        });
        
    };
    useEffect(() => {
        handleButtonClick();
    }, []);


    //function called when user selects the higher option.
    const checkHigher = (views1, views2) => {
        if(views2 > views1) {
            setScore(score + 1);
            return true;
        } else {
            if(user) {
                addScore();
            }
            setScore(0);
            return false
        }
    }

    //function called when user selects the lower option
    const checkLower = (views1, views2) => {
        if(views2 < views1) {
            setScore(score + 1);
            return true;
        } else {
            if(user) {
                addScore();
            }
            setScore(0);
            return false;
        }
    }

    

    

    
    return (
        <>
            <div>
                {firstRound && (
                    <RandomVideo
                        setVideoId={setVideo1Id}
                        setVideoTitle={setVideo1Title}
                        setVideoViews={setVideo1Views}
                    />
                )}
            </div>

            <div>
                {/* This ensures that a second video is displayed when the game starts */}
                    <RandomVideo 
                        setVideoId={setVideo2Id} 
                        setVideoTitle={setVideo2Title} 
                        setVideoViews={setVideo2Views}
                    />
            </div>

            <div className="play">
                <YouTubeVideo videoId = {video1Id} title = {video1Title} views = {video1Views}/>
                <div>
                    <YouTubeVideo videoId = {video2Id} title = {video2Title} />
                    <button onClick={() => {checkHigher(video1Views,video2Views); handleButtonClick()}}>Higher</button>
                    <button onClick={() => {checkLower(video1Views, video2Views); handleButtonClick()}}>Lower</button>
                </div>
                
            </div>
            <div className="score">
                <h1>Score: {score}</h1>
            </div>
        </>
        
    );
    
}