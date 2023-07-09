import { bool, boolean } from "yup";
import { RandomVideo } from "../components/getRandomVideo";
import { YouTubeVideo } from "../components/displayVideo";
import { useState } from "react";



export const Play = () => {
    
    //data for the first video
    const [video1Title, setVideo1Title] = useState("");
    const [video1Views, setVideo1Views] = useState();
    const [video1Id, setVideo1Id] = useState();
    //data for the second video
    const [video2Title, setVideo2Title] = useState("");
    const [video2Views, setVideo2Views] = useState();
    const [video2Id, setVideo2Id] = useState();
    //variable that determines if we should restart the game
    const [newRound, setNewRound] = useState(true);
    //state for the user's score
    const [score, setScore] = useState(0);

    
    return (
        <>
            <div>   
                <RandomVideo setVideoId={setVideo1Id} setVideoTitle={setVideo1Title} setVideoViews={setVideo1Views} />
            </div>
            <div>
                {newRound && 
                    <>
                        <RandomVideo setVideoId={setVideo2Id} setVideoTitle={setVideo2Title} setVideoViews={setVideo2Views} />
                    </>
                }
            </div>
            <div className="play">
                <YouTubeVideo videoId = {video1Id} title = {video1Title} views = {video1Views}/>
                <YouTubeVideo videoId = {video2Id} title = {video2Title} />
            </div>
            <div className="score">
                <h1>Score: {score}</h1>
            </div>
        </>
        
    );
    
}