import { Box, Button, chakra, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const EventCards = ({ sosCard }) => {
	return (
		<>
			<Box
				w="full"
				maxW="sm"
				mx="auto"
				mt={2}
				px={4}
				py={3}
				bg={useColorModeValue("white", "gray.800")}
				shadow="md"
				rounded="md"
			>
				<Box>
					<chakra.h1
						fontSize="lg"
						fontWeight="bold"
						mt={2}
						color={useColorModeValue("gray.800", "white")}
					>
						This is event 1
					</chakra.h1>
					<chakra.p
						fontSize="sm"
						mt={2}
						color={useColorModeValue("gray.600", "gray.300")}
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
						eligendi similique exercitationem optio libero vitae accusamus
						cupiditate laborum eos.
					</chakra.p>
				</Box>

				<Box>
					<Flex
						alignItems="center"
						justifyContent="center"
						mt={2}
						color={useColorModeValue("gray.700", "gray.200")}
					>
						<Button>See Event</Button>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default EventCards;
