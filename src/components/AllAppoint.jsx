import {
	Box,
	Container,
	Flex,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CounCard from "./CounCard";
import {db } from "../utils/firebase-config"

const AllAppoint = () => {
	const [counsellors, setCounsellors] = useState(null);

  useEffect(() => {
    return db.collection('counsellors').onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      console.log(postData);
      setCounsellors(postData);
    });
  }, []);

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
						{ counsellors && counsellors.map((ele) => {
							return <CounCard counsellor={ele} />
						})}
					</VStack>
				</Box>
			</Container>
		</>
	);
};

export default AllAppoint;
