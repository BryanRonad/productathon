import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import GoogleSignIn from "./components/GoogleSignIn";
import Chat from "./components/Chat";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="signup" element={<GoogleSignIn />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Layout>
      </div>
    </AuthContextProvider>
  );
}

export default App;
