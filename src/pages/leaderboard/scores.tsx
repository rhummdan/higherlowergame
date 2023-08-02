import React from "react";
import { Score as IScore } from "./leaderboard"

interface Props{
    score: IScore;
}
export const OutputScore = (props: Props) => {

    const{score} = props;

    return (
        <div>
            <div className="username">
                <h1>{score.username}</h1>
            </div>

            <div className="score">
                <h1>{score.score}</h1>
            </div>
        </div>
    );

}