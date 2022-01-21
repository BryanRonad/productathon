import { Button, chakra } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CouncSignup = () => {
	return (
		<>
			<chakra.h1>Councellor Signup</chakra.h1>
			<Link to="/counsellor/verify">
				<Button>Sign-up</Button>
			</Link>
			<Link to="/counsellor/signin">
				<Button>Already....? Sign-in</Button>
			</Link>
		</>
	);
};

export default CouncSignup;
