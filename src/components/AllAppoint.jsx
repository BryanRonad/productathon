import {
	Box,
	Container,
	Flex,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import CounCard from "./CounCard";

const AllAppoint = () => {
	return (
		<>
			<Container maxW="container.lg">
				<Box
					mx="auto"
					bg={useColorModeValue("white", "gray.800")}
					shadow="lg"
					rounded="lg"
					overflow="hidden"
				>
					<VStack>
						<CounCard />
						<CounCard />
						<CounCard />
						<CounCard />
					</VStack>
				</Box>
			</Container>
		</>
	);
};

export default AllAppoint;
