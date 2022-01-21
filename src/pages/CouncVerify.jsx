import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CouncVerify = () => {
	return (
		<div>
			<h1>This is verify page</h1>
			<Link to="/councillor/dash">
				<Button>Go to Dash.</Button>
			</Link>
		</div>
	);
};

export default CouncVerify;
