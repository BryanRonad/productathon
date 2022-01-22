import {
	Box,
	Button,
	chakra,
	Container,
	Flex,
	HStack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import CounCard from "./CounCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase-config";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CurrentAppoint = () => {
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	const getCurrentUrl = async () => {
		const querySnapshot = await getDocs(collection(db, "paid"));
		console.log(currentUser.uid);
		querySnapshot.forEach((doc) => {
			if (currentUser) {
				if (doc.data().uid === currentUser.uid.toString()) {
					navigate(`/chat?id=${doc.id}`);
				}
			}
			// doc.data() is never undefined for query doc snapshots
			console.log(doc.id, " => ", doc.data());
		});
	};

	return (
		<Container maxW="container.lg">
			<Flex
				height="160px"
				justifyContent="space-between"
				mx="auto"
				bg={useColorModeValue("white", "gray.800")}
				shadow="lg"
				rounded="lg"
				overflow="hidden"
			>
				<Box
					w={1 / 3}
					bgSize="cover"
					style={{
						backgroundImage:
							"url('https://thumbs.gfycat.com/WastefulGiganticClumber-max-1mb.gif')",
					}}
				></Box>

				<Box w={2 / 3} p={{ base: 4, md: 4 }} mt={8}>
					<Flex alignItems="flex-start" direction="column">
						<chakra.h1
							fontSize="2xl"
							fontWeight="bold"
							color={useColorModeValue("gray.800", "white")}
						>
							Session active.
						</chakra.h1>
						<chakra.p
							mt={2}
							fontSize="sm"
							color={useColorModeValue("gray.600", "gray.400")}
						>
							Join your ongoing session with a counsellor.
						</chakra.p>
					</Flex>
				</Box>
				<Box w={1 / 3} p={{ base: 4, md: 4 }} mt={12}>
					<Button onClick={getCurrentUrl} bgColor="blue.200">
						Join Current Session
					</Button>
				</Box>
			</Flex>
		</Container>
	);
};

export default CurrentAppoint;
