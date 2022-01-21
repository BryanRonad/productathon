import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import GoogleSignIn from "./components/GoogleSignIn";
import CouncSignup from "./pages/CouncSignup";
import CouncSignin from "./pages/CouncSignin";
import CouncVerify from "./pages/CouncVerify";
import UserDashboard from "./pages/UserDashboard";
import CouncDashboard from "./pages/CouncDashboard";

function App() {
	return (
		<AuthContextProvider>
			<div className="App">
				<Layout>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="signup/:id" element={<GoogleSignIn />} />
						<Route path="counsellor/signup" element={<CouncSignup />} />
						<Route path="counsellor/signin" element={<CouncSignin />} />
						<Route path="counsellor/verify" element={<CouncVerify />} />
						<Route path="user/dash" element={<UserDashboard />} />
						<Route path="counsellor/dash" element={<CouncDashboard />} />
					</Routes>
				</Layout>
			</div>
		</AuthContextProvider>
	);
}

export default App;
