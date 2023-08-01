import { addDoc, collection } from 'firebase/firestore';
import {auth, db} from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

export const AddScore = (props) => {

    const points = props.userScore;
    const [user] = useAuthState(auth);
    const scoresRef = collection(db, "scores");

    const createScore = async () => {
         await addDoc(scoresRef, {
            username: user?.displayName,
            score: points,
         })
    };

    useEffect(() => {
        createScore();
    })
}