import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import React, { useState, useEffect } from "react";




export const Leaderboard = () => {

    const scoresRef = collection(db, "scores");
    const [scoresList, setScoresList] = useState([]);
    const [loading, setLoading] = useState(true);


    const getScores = async () => {
        try {
            const data = await getDocs(scoresRef);
            const docsArray = data.docs.map((doc) => doc.data());
            const sortedList = docsArray.sort((a, b) => b.score - a.score);
            setScoresList(sortedList);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching scores:", error);
        }
    }

    useEffect(() => {
        getScores();
    }, [])

    return (
        <div className="leaderboard-container">
            <h2 className="leaderboard-title">Top 5 Scores</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                scoresList.slice(0, 5).map((post, index) => (
                <div key={post.id} className="score-item">
                    <span className="rank">{index + 1}.</span>
                    <span className="username">{post.username}</span>
                    <span className="score">{post.score}</span>
                </div>
                ))
            )}
        </div>
    );
}

