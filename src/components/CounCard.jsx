import { Box, Button, chakra, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const CounCard = () => {
	return (
		<>
			<Flex
				w="full"
				p={{ md: 4 }}
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
							"url('https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg')",
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
					<Button>Book Appointment</Button>
				</Box>
			</Flex>
		</>
	);
};

export default CounCard;
