import { Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";
import Calander from "../components/Calander";
import EventCards from "../components/EventCards";
import SosCard from "../components/SosCard";

const CouncDashboard = () => {
	return (
		<>
			<Grid
				mt="50px"
				maxH="80vh"
				templateRows="repeat(2, 1fr)"
				templateColumns="repeat(4, 1fr)"
				gap={5}
			>
				<GridItem rowSpan={1} colSpan={4}>
					<SosCard></SosCard>
				</GridItem>
				<GridItem rowSpan={1} colSpan={3}>
					<Calander />
				</GridItem>
				<GridItem rowSpan={1} colSpan={1} style={{ overflowY: "scroll" }}>
					<VStack>
						<EventCards />
						<EventCards />
						<EventCards />
						<EventCards />
						<EventCards />
						<EventCards />
					</VStack>
				</GridItem>
			</Grid>
		</>
	);
};

export default CouncDashboard;
