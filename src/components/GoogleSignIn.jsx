import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router";
import { db } from "../utils/firebase-config";
import SignInCard from "./SignInCard";
import {
  Button,
  Container,
  CircularProgress,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";

function GoogleSignIn() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { signInWithGoogle, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const ref1 = db.collection("sessions");
  const ref = db.collection("users");
  const [session, setSession] = useState({
    cid: "",
    cname: "",
    time: "",
    uid: "",
    uname: "",
    starttime: "",
    endtime: null,
  });

  const Addsession = () => {
    var sessioncheck = true;

    ref1.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (currentUser) {
          if (doc.data().uid === currentUser.email) {
            sessioncheck = false;
            // if (doc.data().cid !== "") {
            //   console.log("bryan");
            //   navigate("/");
            // }
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
      if (id === "onboard") {
        navigate("/user/dash");
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
              navigate(`/chat?id=${doc.id}&type=free`);
            }
          }
        }
      });
    });
  }, [ref1]);

  return (
    <div>
      {loading ? (
        <Container style={{ height: "80vh", marginTop: "100px", padding: 0 }}>
          <img
            alt="test"
            src="https://i.pinimg.com/originals/d5/a2/b0/d5a2b01b8294bfb8678d67342b106795.gif"
            style={{ margin: 0 }}
          />
          <Center h="100px" color="black" fontSize={25}>
            <CircularProgress
              size="30px"
              isIndeterminate
              color="blue.300"
              marginRight={10}
            />
            <Text fontSize="md">Waiting for a counsellor to join....</Text>
          </Center>
          <Flex direction="row" justifyContent="space-evenly" mt="30vh">
            <Button
              colorScheme="red"
              as="a"
              href="https://nimhans.ac.in/pssmhs-helpline/"
            >
              National PSSMHS help-line
            </Button>
            <Button
              colorScheme="red"
              as="a"
              href="https://suicidepreventionlifeline.org/"
            >
              Suicide Prevention help-line
            </Button>
          </Flex>
        </Container>
      ) : (
        <SignInCard signIn={signInUser} />
      )}
    </div>
  );
}

export default GoogleSignIn;
