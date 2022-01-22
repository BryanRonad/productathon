import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router";
import { db } from "../utils/firebase-config";

function GoogleSignIn() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { signInWithGoogle, currentUser } = useAuth();
	const [loading, setLoading] = useState(false);
	const [alreadyreg, setAlreadyReg] = useState(false);
	const [data, setData] = useState({
		username: "",
		email: "",
		type: id,
		meetings: [""],
	});
	const ref1 = db.collection("sessions");
	const ref = db.collection("users");
	const [session, setSession] = useState({
		cid: "",
		cname: "",
		time: "",
		uid: "",
		uname: "",
	});

	const Addsession = () => {
		var sessioncheck = true;

		ref1.onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				if (currentUser) {
					if (doc.data().uid === currentUser.email) {
						sessioncheck = false;
					}
				}
			});

			if (sessioncheck) {
				var d = new Date();

				session.time = d.toLocaleString();
				session.uid = currentUser.email;
				session.uname = currentUser.displayName;

				ref1.add(session);
			}
		});
	};

	const signInUser = () => {
		const userCollection = db.collection("users");
		signInWithGoogle()
			.then((user) => {
				console.log(user.user.uid);
				userCollection.doc(user.user.uid.toString()).set({
					type: id,
				});
				navigate("/user/dash");
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		if (currentUser && id === "free") {
			ref.onSnapshot((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					if (currentUser) {
						if (doc.data().email === currentUser.email) {
							setAlreadyReg(true);
						}
					}
				});
			});

			Addsession();
			setLoading(true);
		} else {
			setLoading(false);
		}
	}, [currentUser]);

	useEffect(async () => {
		if (!alreadyreg && currentUser) {
			data.username = currentUser.displayName;
			data.email = currentUser.email;

			await ref.add(data);
		}
	}, [alreadyreg]);

	useEffect(() => {
		ref1.onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				if (currentUser) {
					if (doc.data().uid === currentUser.email) {
						if (doc.data().cid) {
							window.location.href = `/chat?id=${doc.id}`;
						}
					}
				}
			});
		});
	}, [ref1]);

	return (
		<div>
			{loading ? (
				"waiting for counsellor"
			) : (
				<button onClick={signInUser}>Sign in {id}</button>
			)}
		</div>
	);
}

export default GoogleSignIn;
