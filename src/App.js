import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import GoogleSignIn from "./components/GoogleSignIn";
import { PublicRoute } from "./auth/PublicRoute";
import { PrivateRoute } from "./auth/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/signup" element={<PrivateRoute />}>
              <Route exact path="/signup" element={<GoogleSignIn />} />
              <Route path="signup/:id" element={<GoogleSignIn />} />
              <Route path="counsellor/signup" element={<CouncSignup />} />
              <Route path="counsellor/signin" element={<CouncSignin />} />
              <Route path="counsellor/verify" element={<CouncVerify />} />
            </Route>
          </Routes>
        </Layout>
      </div>
    </AuthContextProvider>
  );
}

export default App;
