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

const Assesment = () => {
	return (
		<>
			<Container maxW="container.lg">
				<Flex
					justifyContent="space-between"
					mx="auto"
					bg={useColorModeValue("white", "gray.800")}
					shadow="lg"
					rounded="lg"
					overflow="hidden"
				>
					<Flex
						direction="column"
						alignItems="flex-start"
						p={{ base: 4, md: 4 }}
					>
						<Text fontSize="xl" color="black.500">
							Take an online mental health Assesment.
						</Text>
						<Text fontSize="sm" color="gray.500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Text>
					</Flex>
					<Flex p={{ base: 4, md: 4 }}>
						<Button>Take Assesment</Button>
					</Flex>
				</Flex>
			</Container>
		</>
	);
};

export default Assesment;
