import {
	Button,
	chakra,
	Flex,
	HStack,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	VisuallyHidden,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GiHeadbandKnot } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	useDisclosure,
} from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";
import UserProfile from "./UserProfile";
import { db } from "../utils/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Navbar = () => {
	const { currentUser, logout } = useAuth();
	const [utype, settype] = useState("");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [data, setData] = useState({
		fname: "",
		lname: "",
		email: "",
	});
	const ref = db.collection("counsellors");

	useEffect(async () => {
		ref.onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				if (currentUser) {
					if (doc.data().email === currentUser.email) {
						setData(doc.data());
					}
				}
			});
		});

		const querySnapshotc = await getDocs(collection(db, "counsellors"));
		const querySnapshotu = await getDocs(collection(db, "users"));

		querySnapshotc.forEach((doc) => {
			if (currentUser) {
				if (doc.id === currentUser.uid) {
					settype("counsellor");
				}
			}
		});

		querySnapshotu.forEach((doc) => {
			if (currentUser) {
				if (doc.id === currentUser.uid) {
					if (doc.data().type === "free") {
						settype("fusers");
					} else {
						settype("pusers");
					}
				}
			}
		});
	}, [currentUser]);

	return (
		<>
			{currentUser ? (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<UserProfile data={data} />
						<ModalFooter>
							<Button colorScheme="green" mr={3}>
								Edit
							</Button>
							<Button onClick={onClose}>Close</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			) : (
				""
			)}

			<chakra.header w="full" px={{ sm: 4 }} py={4} shadow="md">
				<Flex alignItems="center" justifyContent="space-between" mx="auto">
					<Flex>
						<Link to="/">
							<GiHeadbandKnot size={30} />
							<VisuallyHidden>Mental-piece</VisuallyHidden>
						</Link>
						<Text fontSize="xl" fontWeight="bold" ml="2">
							MindAid
						</Text>
					</Flex>

					<HStack color="brand.500">
						{currentUser ? (
							<>
								<Menu>
									<MenuButton as={Button} leftIcon={<FaRegUserCircle />}>
										{currentUser.displayName}
									</MenuButton>
									<MenuList>
										{console.log(utype)}
										{utype === "fusers" ? (
											""
										) : (
											<MenuItem>
												<Link
													to={
														utype === "counsellor"
															? "counsellor/dash"
															: "user/dash"
													}
												>
													Dashboard
												</Link>
											</MenuItem>
										)}
										{currentUser ? (
											<MenuItem onClick={onOpen}>Profile</MenuItem>
										) : (
											""
										)}
									</MenuList>
								</Menu>
								<Button
									colorScheme="orange"
									variant="solid"
									onClick={() => logout()}
								>
									Logout
								</Button>
							</>
						) : (
							<Link to="counsellor/signin">
								<Button variant="solid">Login as counsellor</Button>
							</Link>
						)}
					</HStack>
				</Flex>
			</chakra.header>
		</>
	);
};

export default Navbar;
