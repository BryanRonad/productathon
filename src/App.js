import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import GoogleSignIn from "./components/GoogleSignIn";
import { Layout } from "./components/Layout";

function App() {
	return (
		<AuthContextProvider>
			<div className="App">
				<Layout />
			</div>
		</AuthContextProvider>
	);
}

export default App;
