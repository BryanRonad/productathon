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
	VisuallyHidden,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
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
import UserProfile from "./UserProfile";

const Navbar = () => {
	const { currentUser, logout } = useAuth();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<UserProfile />
				</ModalContent>
			</Modal>

			<chakra.header w="full" px={{ sm: 4 }} py={4} shadow="md">
				<Flex alignItems="center" justifyContent="space-between" mx="auto">
					<Flex>
						<Link to="/">
							<Icon as={BiPlusMedical} />
							<VisuallyHidden>Mental-piece</VisuallyHidden>
						</Link>
						<chakra.h1 fontWeight="bold" ml="2">
							Mental-piece xD
						</chakra.h1>
					</Flex>

					<HStack color="brand.500">
						{currentUser ? (
							<>
								<Menu>
									<MenuButton as={Button} leftIcon={<FaRegUserCircle />}>
										{currentUser.displayName}
									</MenuButton>
									<MenuList>
										<MenuItem>
											<Link to="counsellor/dash">Dashboard</Link>
										</MenuItem>
										<MenuItem onClick={onOpen}>Profile</MenuItem>
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
