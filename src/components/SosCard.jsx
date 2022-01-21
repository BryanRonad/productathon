import {
    Box,
    Button,
    chakra,
    Flex,
    HStack,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { useAuth } from "../context/AuthContext"
import { db } from '../utils/firebase-config'

const SosCard =  ({ onClose, session }) => {

    const { currentUser } = useAuth()
    const assignCid = async (session) => {
        let session_id = session.session_id
        let updatedSession = {...session, cid: currentUser.email}
        delete updatedSession.session_id		
        console.log(updatedSession);
        await setDoc(doc(db, "sessions", session_id), updatedSession);
    }

    return (
        <>
            <Flex
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
                        background: "red",
                    }}
                ></Box>

                <Box w={2 / 3} p={{ base: 4, md: 4 }}>
                    <chakra.h1
                        fontSize="2xl"
                        fontWeight="bold"
                        color={useColorModeValue("gray.800", "white")}
                    >
                        Emergency SOS
                    </chakra.h1>

                    <chakra.p
                        mt={2}
                        fontSize="sm"
                        color={useColorModeValue("gray.600", "gray.400")}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
                    </chakra.p>
                </Box>
                <Box w={2 / 3} p={{ base: 4, md: 8 }}>
                    <HStack spacing="10px">
                        <Button onClick={() => assignCid(session)}>Take-up Call</Button>
                        <Button onClick={onClose}>Opt-out</Button>
                    </HStack>
                </Box>
            </Flex>
        </>
    );
};

export default SosCard;
