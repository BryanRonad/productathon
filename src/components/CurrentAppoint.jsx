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

const CurrentAppoint = () => {
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
							"url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
					}}
				></Box>

				<Box w={2 / 3} p={{ base: 4, md: 4 }}>
					<Flex alignItems="flex-start" direction="column">
						<chakra.h1
							fontSize="2xl"
							fontWeight="bold"
							color={useColorModeValue("gray.800", "white")}
						>
							Backpack
						</chakra.h1>
						<chakra.p
							mt={2}
							fontSize="sm"
							color={useColorModeValue("gray.600", "gray.400")}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
						</chakra.p>
						<chakra.p
							mt={2}
							fontSize="sm"
							color={useColorModeValue("gray.600", "gray.400")}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
						</chakra.p>
					</Flex>
				</Box>
				<Box w={1 / 3} p={{ base: 4, md: 4 }} mt={4}>
					<Button>Join Current Session</Button>
				</Box>
			</Flex>
		</Container>
	);
};

export default CurrentAppoint;
