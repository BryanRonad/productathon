import {
	Button,
	chakra,
	Flex,
	HStack,
	Icon,
	VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
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
					<HStack display="flex" alignItems="center">
						<HStack color="brand.500">
							<Link to="councillor/signin">
								<Button variant="solid">Login as Councillor</Button>
							</Link>
						</HStack>
					</HStack>
				</Flex>
			</chakra.header>
		</>
	);
};

export default Navbar;
