import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import EventContextProvider from "./context/EventContext";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import GoogleSignIn from "./components/GoogleSignIn";
import CouncSignup from "./pages/CouncSignup";
import CouncSignin from "./pages/CouncSignin";
import CouncVerify from "./pages/CouncVerify";
import { PublicRoute } from "./auth/PublicRoute";
import Chat from "./components/Chat";
import { PrivateRoute } from "./auth/PrivateRoute";
import CouncDashboard from "./pages/CouncDashboard";
import UserDashboard from "./pages/UserDashboard";
import { useAuth } from "./context/AuthContext";

function App() {
	const { currentUser } = useAuth();

	return (
		<AuthContextProvider>
			<EventContextProvider>
				<div className="App">
					<Layout>
						<Routes>
							<Route exact path="/" element={<HomePage />} />
							<Route exact path="/signup/:id" element={<GoogleSignIn />} />
							<Route
								exact
								path="/counsellor/signup"
								element={<CouncSignup />}
							/>
							<Route
								exact
								path="/counsellor/signin"
								element={<CouncSignin />}
							/>
							<Route exact path="/counsellor/verify" element={<PrivateRoute />}>
								<Route
									exact
									path="/counsellor/verify"
									element={<CouncVerify />}
								/>
							</Route>
							<Route exact path="/chat" element={<Chat />} />
							<Route exact path="/counsellor/dash" element={<PrivateRoute />}>
								<Route
									exact
									path="/counsellor/dash"
									element={<CouncDashboard />}
								/>
							</Route>
							<Route exact path="/user/dash" element={<PrivateRoute />}>
								<Route exact path="/user/dash" element={<UserDashboard />} />
							</Route>
						</Routes>
					</Layout>
				</div>
			</EventContextProvider>
		</AuthContextProvider>
	);
}

export default App;
