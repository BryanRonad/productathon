import { Button, chakra } from "@chakra-ui/react";
import React from "react";
import { db } from "../utils/firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SignInCard from "../components/SignInCard";

const CouncSignin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const signIn = () => {
    const counsellorCollection = db.collection("counsellors");
    signInWithGoogle()
      .then((user) => {
        console.log(user.user.uid);
        counsellorCollection.doc(user.user.uid.toString()).set(
          {
            isVerified: false,
            bio: "This is the bio",
            qualifications: ["MA", "PhD"],
          },
          { merge: true }
        );
        navigate("/counsellor/verify");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <SignInCard signIn={signIn} />
    </>
  );
};

export default CouncSignin;
