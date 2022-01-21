import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import GoogleSignIn from "./components/GoogleSignIn";
import CouncSignup from "./pages/CouncSignup";
import CouncSignin from "./pages/CouncSignin";
import CouncVerify from "./pages/CouncVerify";

function App() {
	return (
		<AuthContextProvider>
			<div className="App">
				<Layout>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="signup/:id" element={<GoogleSignIn />} />
						<Route path="councillor/signup" element={<CouncSignup />} />
						<Route path="councillor/signin" element={<CouncSignin />} />
						<Route path="councillor/verify" element={<CouncVerify />} />
					</Routes>
				</Layout>
			</div>
		</AuthContextProvider>
	);
}

export default App;
