import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import React, { useState, useEffect } from "react";
import {OutputScore} from './scores';

export interface Score {
    username: string,
    score: number,
}

export const Leaderboard = () => {

    const scoresRef = collection(db, "scores");
    const [scoresList, setScoresList] = useState<Score[] | null>(null);

    const getScores = async () => {
        const data = await getDocs(scoresRef);
        setScoresList(data.docs.map((doc) => ({score: doc.data().score, username: doc.data().username})) as Score[]);
    }

    useEffect(() => {
        getScores();
    }, [])

    return (
        <div>
            {scoresList?.map((score) => (
                <OutputScore  score={score}/>
            ))}
        </div>
    );
}