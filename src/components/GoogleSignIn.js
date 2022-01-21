import React from "react";
import { useAuth } from "../context/AuthContext";

function GoogleSignIn() {
  const { signInWithGoogle } = useAuth();

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in</button>
    </div>
  );
}

export default GoogleSignIn;
