import { bool, boolean } from "yup";
import { RandomVideo } from "../components/getRandomVideo";
import { YouTubeVideo } from "../components/displayVideo";
import { useState } from "react";
import {CorrectAnswer} from "../components/functionalities";



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

    const [buttonClicked, setButtonClicked] = useState(true);
    //state for the user's score
    const [score, setScore] = useState(0);
    
    const [firstRound, setFirstRound] = useState(true);

    const handleButtonClick = () => {
        // Toggle the state when a button is clicked
        <RandomVideo setVideoId={setVideo2Id} setVideoTitle={setVideo2Title} setVideoViews={setVideo2Views}/>
        setFirstRound(false);
    };



    const checkHigher = (views1, views2) => {
        if(views2 > views1) {
            setScore(score + 1);
        } else {
            setScore(0);
            setFirstRound(true);
        }
    }

    const checkLower = (views1, views2) => {
        if(views2 < views1) {
            setScore(score + 1);
        } else {
            setScore(0);
            setFirstRound(true);
        }
    }

    

    

    //if newRound is true, generate new vids for vid1 and vid2. If it isn't true, meaning the user answered correctly,
    //set vid1 to vid2 and generate a new vid for vid2.
    return (
        <>
            {/* this div covers video1 */}
            <div> 
                {newRound ? (
                    <>
                        <RandomVideo setVideoId={setVideo1Id} setVideoTitle={setVideo1Title} setVideoViews={setVideo1Views} />
                    </>
                ) : (
                    <>
                        <CorrectAnswer set1Id={setVideo1Id} set1Title={setVideo1Title} set1Views={setVideo1Views}
                        id2={video2Id} title2={video2Title} views2={video2Views}/>
                    </>
                    )
                }
            </div>

            <div>
                {/* We need the second video to update everytime */}

                
                <>
                    <RandomVideo setVideoId={setVideo2Id} setVideoTitle={setVideo2Title} setVideoViews={setVideo2Views}/>
                </> 
                    
                
                
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