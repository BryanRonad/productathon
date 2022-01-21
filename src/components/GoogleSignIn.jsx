import React from "react";
import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router";

function GoogleSignIn() {
	const { id } = useParams();
	const { signInWithGoogle } = useAuth();

	return (
		<div>
			<button onClick={signInWithGoogle}>Sign in {id}</button>
		</div>
	);
}

export default GoogleSignIn;
