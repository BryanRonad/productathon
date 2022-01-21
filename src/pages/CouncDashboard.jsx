import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { collection, onSnapshot, query, where } from "@firebase/firestore";
import React from "react";
import Calander from "../components/Calander";
import EventCards from "../components/EventCards";
import SosCard from "../components/SosCard";
import { db } from "../utils/firebase-config";

const CouncDashboard = () => {
	const q = query(collection(db, "sessions"), where("cid", "==", ""));
	const unsubscribe = onSnapshot(q, (snapshot) => {
		snapshot.docChanges().forEach((change) => {
			console.log(change.type);
			if (change.type === "added") {
				console.log("New city: ", change.doc.data());
			}
			if (change.type === "modified") {
				console.log("Modified city: ", change.doc.data());
			}
			if (change.type === "removed") {
				console.log("Removed city: ", change.doc.data());
			}
		});
	});

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
					<SosCard />
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
