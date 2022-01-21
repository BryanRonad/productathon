import { Button, chakra } from "@chakra-ui/react";
import React from "react";
import { db } from '../utils/firebase-config'
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CouncSignin = () => {
    const { signInWithGoogle } = useAuth();

    const signInCounsellor = () => {
        const counsellorCollection = db.collection('counsellors')
        signInWithGoogle()
              .then((user) => {
                console.log(user.user.uid);
                counsellorCollection.doc(user.user.uid.toString()).set({
                    bio: "This is the bio",
                    qualifications: ["MA", "PhD"]
                })
              })
              .catch((error) => console.log(error))}

    return (
        <>
            <chakra.h1>Councellor Signin</chakra.h1>
            <Link to="/counsellor/dash">
                <Button onClick={signInCounsellor}>Sign-in</Button>
            </Link>
            <Link to="/counsellor/signup">
                <Button>No account....? Sign-up</Button>
            </Link>
        </>
    );
};

export default CouncSignin;
