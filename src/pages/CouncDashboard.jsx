import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	Grid,
	GridItem,
	VStack,
} from "@chakra-ui/react";
import { collection, onSnapshot, query, where } from "@firebase/firestore";
import React, { useState } from "react";
import Calander from "../components/Calander";
import EventCards from "../components/EventCards";
import SosCard from "../components/SosCard";
import { db } from "../utils/firebase-config";

const CouncDashboard = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const onClose = () => setIsOpen(false);
	const cancelRef = React.useRef();

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
			<AlertDialog
				size="2xl"
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent w="full">
						<SosCard onClose={onClose} />
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>

			<Grid
				mt="50px"
				maxH="80vh"
				templateRows="repeat(2, 1fr)"
				templateColumns="repeat(4, 1fr)"
				gap={5}
			>
				<GridItem rowSpan={1} colSpan={4}>
					<Button onClick={() => setIsOpen(!isOpen)}>Open</Button>
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
