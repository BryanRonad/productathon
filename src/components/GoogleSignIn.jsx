import React from "react";
import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router";
import { db } from '../utils/firebase-config'

function GoogleSignIn() {
	const { id } = useParams();
	const { signInWithGoogle } = useAuth();

	const signInUser = () => {
        const userCollection = db.collection('users')
        signInWithGoogle()
              .then((user) => {
				  console.log(user.user.uid);
                userCollection.doc(user.user.uid.toString()).set({
					type: id
				})
              })
              .catch((error) => console.log(error))}

	return (
		<div>
			<button onClick={signInUser}>Sign in {id}</button>
		</div>
	);
}

export default GoogleSignIn;
