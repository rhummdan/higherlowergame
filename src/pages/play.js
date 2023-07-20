import { bool, boolean } from "yup";
import { RandomVideo } from "../components/getRandomVideo";
import { YouTubeVideo } from "../components/displayVideo";
import { useState } from "react";
import {correctAnswer} from "../components/functionalities";



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

    const checkHigher = (views1, views2) => {
        if(views2 > views1) {
            setScore(score + 1);
            setNewRound(false);
        } else {
            setScore(0);
            setNewRound(false);
        }
    }

    

    

    //if newRound is true, generate new vids for vid1 and vid2. If it isn't true, meaning the user answered correctly,
    //set vid1 to vid2 and generate a new vid for vid2.
    return (
        <>
            <div> {newRound ? (
                <>
                    <RandomVideo setVideoId={setVideo1Id} setVideoTitle={setVideo1Title} setVideoViews={setVideo1Views} />
                </>
            ) : (
                    <>
                        {/* call the correctAnswer component from the other page */}
                    </>
                )
            }
                
            
              
            </div>

            <div>
                <RandomVideo setVideoId={setVideo2Id} setVideoTitle={setVideo2Title} setVideoViews={setVideo2Views} />
            </div>

            <div className="play">
                <YouTubeVideo videoId = {video1Id} title = {video1Title} views = {video1Views}/>
                <div>
                    <YouTubeVideo videoId = {video2Id} title = {video2Title} />
                    <button onClick={() => checkHigher(video1Views,video2Views)}>Higher</button>
                    <button>Lower</button>
                </div>
                
            </div>
            <div className="score">
                <h1>Score: {score}</h1>
            </div>
        </>
        
    );
    
}