import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import AllAppoint from "../components/AllAppoint";
import Assesment from "../components/Assesment";
import CurrentAppoint from "../components/CurrentAppoint";

const UserDashboard = () => {
	return (
		<>
			<Grid
				mt="50px"
				maxH="85vh"
				templateRows="repeat(8, 1fr)"
				templateColumns="repeat(1, 1fr)"
				gap={5}
			>
				<GridItem rowSpan={1} colSpan={1}>
					<Assesment />
				</GridItem>
				<GridItem rowSpan={2} colSpan={1}>
					<CurrentAppoint />
				</GridItem>
				<GridItem rowSpan={5} colSpan={1} style={{ overflowY: "scroll" }}>
					<AllAppoint />
				</GridItem>
			</Grid>
		</>
	);
};

export default UserDashboard;
