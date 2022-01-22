import { Button, Container, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import AssesmentModal from "./AssesmentModal";
import { BsArrowRightSquare } from "react-icons/bs";
import { MdAssessment } from "react-icons/md";

const Assesment = () => {
	const [isOpen, setIsOpen] = useState(false);
	const onClose = () => setIsOpen(false);

	return (
		<>
			<Container maxW="container.lg">
				<Flex
					justifyContent="space-between"
					mx="auto"
					bg="green.100"
					shadow="lg"
					rounded="lg"
					overflow="hidden"
				>
					<Flex p={{ base: 4, md: 4 }}>
						<MdAssessment size={50} />
					</Flex>
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
						<Button
							colorScheme="teal"
							rightIcon={<BsArrowRightSquare />}
							mt={2}
							onClick={() => setIsOpen(!isOpen)}
						>
							Take Assesment
						</Button>
					</Flex>
				</Flex>
				<AssesmentModal isOpen={isOpen} onClose={onClose} />
			</Container>
		</>
	);
};

export default Assesment;
