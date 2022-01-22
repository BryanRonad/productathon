import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router";
import { db } from "../utils/firebase-config";
import SignInCard from "./SignInCard";
import {
  Button,
  Container,
  BeatLoader,
  CircularProgress,
  Center,
} from "@chakra-ui/react";

function GoogleSignIn() {
  const { id } = useParams();
  const { signInWithGoogle, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [alreadyreg, setAlreadyReg] = useState(false);
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
        userCollection.doc(user.user.uid.toString()).set({
          type: id,
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (currentUser) {
      if (id === "free") {
        Addsession();
        setLoading(true);
      }
    } else {
      setLoading(false);
    }
  }, [currentUser]);

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
        <Container style={{ marginTop: "100px", padding: 0 }}>
          <img
            src="https://i.pinimg.com/originals/d5/a2/b0/d5a2b01b8294bfb8678d67342b106795.gif"
            style={{ margin: 0 }}
          />
          <Center bg="tomato" h="100px" color="white" fontSize={25}>
            <CircularProgress
              isIndeterminate
              color="blue.300"
              marginRight={10}
            />
            Waiting for Councellor
          </Center>
        </Container>
      ) : (
        <SignInCard signIn={signInUser} />
      )}
    </div>
  );
}

export default GoogleSignIn;

{
  /*  */
}
