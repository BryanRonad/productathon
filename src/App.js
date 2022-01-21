import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import GoogleSignIn from "./components/GoogleSignIn";
import CouncSignup from "./pages/CouncSignup";
import CouncSignin from "./pages/CouncSignin";
import CouncVerify from "./pages/CouncVerify";
import { PublicRoute } from "./auth/PublicRoute";
import { PrivateRoute } from "./auth/PrivateRoute";
import CouncDashboard from "./pages/CouncDashboard";
import UserDashboard from "./pages/UserDashboard";

function App() {
	return (
		<AuthContextProvider>
			<div className="App">
				<Layout>
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route exact path="/signup/:id" element={<GoogleSignIn />} />
						<Route exact path="/counsellor/signup" element={<CouncSignup />} />
						<Route exact path="/counsellor/signin" element={<CouncSignin />} />
						<Route exact path="/counsellor/verify" element={<CouncVerify />} />
						<Route exact path="/counsellor/dash" element={<PrivateRoute />}>
							<Route
								exact
								path="/counsellor/dash"
								element={<CouncDashboard />}
							/>
						</Route>
						<Route path="/user/dash" element={<UserDashboard />}></Route>
					</Routes>
				</Layout>
			</div>
		</AuthContextProvider>
	);
}

export default App;
