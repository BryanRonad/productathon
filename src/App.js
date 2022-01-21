import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import GoogleSignIn from "./components/GoogleSignIn";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<AuthContextProvider>
			<div className="App">
				<Layout>
					<HomePage />
				</Layout>
			</div>
		</AuthContextProvider>
	);
}

export default App;
