import {
	Flex,
	Stack,
	useColorModeValue,
	HStack,
	Avatar,
	Icon,
	chakra,
	Divider,
	Badge,
	Button,
} from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
const UserProfile = ({ data }) => {
	return (
		<div>
			<Flex align={"center"} justify={"center"}>
				<Stack
					spacing={4}
					w={"full"}
					maxW={"md"}
					bg={useColorModeValue("white", "gray.700")}
					rounded={"xl"}
					p={6}
					my={12}
				>
					<Flex direction="column" alignItems="flex-start">
						<Flex
							direction="row"
							justifyContent="flex-start"
							alignItems="center"
						>
							<Avatar size="xl"></Avatar>
							<Button size="md" ml={5}>
								Change Profile Picture
							</Button>
						</Flex>
						<Divider mt={5} />
						<Flex
							alignItems="center"
							mt={4}
							color={useColorModeValue("gray.700", "gray.200")}
						>
							<Icon as={FaUserCircle} h={6} w={6} mr={2} />

							<chakra.h1 px={2} fontSize="sm">
								{data.fname + " " + data.lname}
							</chakra.h1>
						</Flex>
						<Flex
							alignItems="center"
							mt={4}
							color={useColorModeValue("gray.700", "gray.200")}
						>
							<Icon as={AiOutlineMail} h={6} w={6} mr={2} />

							<chakra.h1 px={2} fontSize="sm">
								{data.email}
							</chakra.h1>
						</Flex>
						<Flex
							alignItems="center"
							mt={4}
							color={useColorModeValue("gray.700", "gray.200")}
						>
							<Icon as={BsInfoCircle} h={6} w={6} mr={2} />

							<chakra.h1 px={2} fontSize="sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
								iusto? Optio odio quibusdam quo ducimus? Incidunt nihil
								laudantium vel ex illo enim nisi dolorum. Dolore, tenetur!
								Minima cumque illo deserunt.
							</chakra.h1>
						</Flex>
						<Flex
							alignItems="center"
							mt={4}
							color={useColorModeValue("gray.700", "gray.200")}
						>
							<Icon as={SiGooglescholar} h={6} w={6} mr={2} />

							<HStack direction="row">
								<Badge colorScheme="green">PHD</Badge>
								<Badge colorScheme="red">MCOM</Badge>
								<Badge colorScheme="purple">BCOM</Badge>
							</HStack>
						</Flex>
					</Flex>
				</Stack>
			</Flex>
		</div>
	);
};

export default UserProfile;
