import {
	Box,
	Button,
	chakra,
	Flex,
	ListItem,
	OrderedList,
	SimpleGrid,
	Text,
	UnorderedList,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

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

				<OrderedList>
					<ListItem>Lorem ipsum dolor sit amet</ListItem>
					<ListItem>Consectetur adipiscing elit</ListItem>
					<ListItem>Integer molestie lorem at massa</ListItem>
					<ListItem>Facilisis in pretium nisl aliquet</ListItem>
				</OrderedList>

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
