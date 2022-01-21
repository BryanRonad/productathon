import { Button, chakra } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CouncSignin = () => {
	return (
		<>
			<chakra.h1>Councellor Signin</chakra.h1>
			<Link to="/counsellor/dash">
				<Button>Sign-in</Button>
			</Link>
			<Link to="/counsellor/signup">
				<Button>No account....? Sign-up</Button>
			</Link>
		</>
	);
};

export default CouncSignin;
