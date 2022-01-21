import {
	Button,
	chakra,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Switch,
	VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
	const { currentUser, logout } = useAuth();
	console.log(currentUser);

	return (
		<>
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
										<MenuItem>Profile</MenuItem>
									</MenuList>
								</Menu>
								<Button bgColor="red.100">
									Emergency SOS
									<Switch colorScheme="red" ml="5px" id="email-alerts" />
								</Button>
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
