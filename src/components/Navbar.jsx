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

const Navbar = () => {
	return (
		<>
			<chakra.header w="full" px={{ sm: 4 }} py={4} shadow="md">
				<Flex alignItems="center" justifyContent="space-between" mx="auto">
					<Flex>
						<chakra.a
							href="/"
							title="Choc Home Page"
							display="flex"
							alignItems="center"
						>
							<Icon as={BiPlusMedical} />
							<VisuallyHidden>Choc</VisuallyHidden>
						</chakra.a>
						<chakra.h1 fontWeight="bold" ml="2">
							Mental-piece xD
						</chakra.h1>
					</Flex>
					<HStack display="flex" alignItems="center">
						<HStack color="brand.500">
							<Button variant="solid">Register as Councellor</Button>
						</HStack>
					</HStack>
				</Flex>
			</chakra.header>
		</>
	);
};

export default Navbar;
