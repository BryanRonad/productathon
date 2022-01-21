import { Button, chakra } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CouncSignup = () => {
	return (
		<>
			<chakra.h1>Councellor Signup</chakra.h1>
			<Link to="/councillor/verify">
				<Button>Sign-up</Button>
			</Link>
			<Link to="/councillor/signin">
				<Button>Already....? Sign-in</Button>
			</Link>
		</>
	);
};

export default CouncSignup;
