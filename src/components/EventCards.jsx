import {
	Box,
	Button,
	chakra,
	Flex,
	Icon,
	ListItem,
	OrderedList,
	SimpleGrid,
	Text,
	UnorderedList,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { BsFillSkipEndFill } from "react-icons/bs";

const EventCards = ({ data, order }) => {
	return (
		<>
			<Box
				p={5}
				bg={useColorModeValue("white", "gray.800")}
				shadow="md"
				rounded="md"
			>
				<chakra.h1
					fontSize="lg"
					fontWeight="bold"
					mt={2}
					color={useColorModeValue("gray.800", "white")}
				>
					Session {order + 1}
				</chakra.h1>

				<Flex
					alignItems="center"
					mt={4}
					color={useColorModeValue("gray.700", "gray.200")}
				>
					<Icon as={FaUserCircle} h={6} w={6} mr={2} />

					<chakra.h1 px={2} fontSize="sm">
						{data.user}
					</chakra.h1>
				</Flex>
				<Flex
					alignItems="center"
					mt={4}
					color={useColorModeValue("gray.700", "gray.200")}
				>
					<Icon as={BiTime} h={6} w={6} mr={2} />

					<chakra.h1 px={2} fontSize="sm">
						{data.start}
					</chakra.h1>
				</Flex>
				<Flex
					alignItems="center"
					mt={4}
					color={useColorModeValue("gray.700", "gray.200")}
				>
					<Icon as={BsFillSkipEndFill} h={6} w={6} mr={2} />

					<chakra.h1 px={2} fontSize="sm">
						{data.end}
					</chakra.h1>
				</Flex>

				<Box>
					<Flex
						alignItems="center"
						justifyContent="center"
						mt={5}
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
