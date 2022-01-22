import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	Flex,
	Grid,
	GridItem,
	VStack,
} from "@chakra-ui/react";
import { collection, onSnapshot, query, where } from "@firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import Calander from "../components/Calander";
import EventCards from "../components/EventCards";
import SosCard from "../components/SosCard";
import { db } from "../utils/firebase-config";
import { Switch } from "@chakra-ui/switch";
import { useAuth } from "../context/AuthContext";

const CouncDashboard = () => {
	const { currentUser } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const [optOut, setOptOut] = useState(false);
	const [chatSession, setChatSession] = useState({});
	const onClose = () => setIsOpen(false);
	const cancelRef = useRef();

	useEffect(() => {
		if (!optOut) {
			const q = query(collection(db, "sessions"), where("cid", "==", ""));
			onSnapshot(q, (snapshot) => {
				snapshot.docChanges().forEach((change) => {
					if (change.type === "added") {
						setIsOpen(true);
						let temp = change.doc.data();
						temp["session_id"] = change.doc.id;
						console.log(temp);
						setChatSession(temp);
						// console.log('cid was ' + change.type, change.doc.data());
					} else if (change.type === "removed") {
						setIsOpen(false);
					}
				});
			});
		}
	}, [optOut]);

	useEffect(() => {
		console.log(optOut);
	}, [optOut]);

	return (
		<>
			{optOut && (
				<AlertDialog
					size="2xl"
					isOpen={isOpen}
					leastDestructiveRef={cancelRef}
					onClose={onClose}
				>
					<AlertDialogOverlay>
						<AlertDialogContent w="full">
							{" "}
							<SosCard onClose={onClose} session={chatSession} />
						</AlertDialogContent>
					</AlertDialogOverlay>
				</AlertDialog>
			)}

			<Grid
				mt="50px"
				maxH="80vh"
				templateRows="repeat(2, 1fr)"
				templateColumns="repeat(4, 1fr)"
				gap={5}
			>
				<GridItem rowSpan={1} colSpan={4}>
					<Flex justifyContent="flex-end">
						<Button bgColor="red.100">
							Opt out of Emergency SOS
							<Switch
								colorScheme="red"
								ml="5px"
								id="email-alerts"
								defaultChecked={false}
								onChange={() => setOptOut(!optOut)}
							/>
						</Button>
					</Flex>
				</GridItem>

				<GridItem shadow="lg" rounded="md" rowSpan={1} colSpan={3} p={5} bg="">
					<Calander
						isCounsellor={true}
						id={currentUser.uid}
						currentUser={currentUser}
					/>
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
