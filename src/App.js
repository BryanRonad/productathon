import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import GoogleSignIn from "./components/GoogleSignIn";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <GoogleSignIn />
      </div>
    </AuthContextProvider>
  );
}

export default App;
