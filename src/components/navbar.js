import { Link } from "react-router-dom";
import {auth, provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'



export const Navbar = () => {

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
    }

    const logOut = async () => {
        await signOut(auth);
    }

    const [user] = useAuthState(auth);

    return (
        <div className="navbar">
            <div className="logo">

            </div>

            <div className="links">
                <Link to="/">Play!</Link>
                <Link to="/leaderboard">Leaderboard</Link>
            </div>
            
            <div className="user">
                {!user ? 
                    <button className="navbutton" onClick={signInWithGoogle}>Sign In With Google</button>
                : (
                    <>
                        <img className="profilePic navbutton" src={user?.photoURL || ""} width="50" height="50"/>
                        <button className="navbutton" onClick={logOut}>LOG OUT</button>
                    </>
                )}
            </div>
        </div>
        
    );
}