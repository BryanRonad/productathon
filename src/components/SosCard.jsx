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
import { useAuth } from "../context/AuthContext";
import { db } from "../utils/firebase-config";
import { BsFillTelephonePlusFill, BsFillTelephoneXFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SosCard = ({ onClose, session }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const assignCid = async (session) => {
    var date = new Date().toLocaleString();
    let session_id = session.session_id;

    let updatedSession = {
      ...session,
      cid: currentUser.email,
      cname: currentUser.displayName,
      starttime: date,
    };
    delete updatedSession.session_id;
    await setDoc(doc(db, "sessions", session_id), updatedSession);
    navigate(`/chat?id=${session_id}&type=free`);
  };

  return (
    <>
      <Flex
        mx="auto"
        margin={0}
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
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
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
            Username: {session.uname}
          </chakra.p>
          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Waiting since: {session.time}
          </chakra.p>
        </Box>
        <Box w={2 / 3} p={{ base: 4, md: 8 }}>
          <HStack spacing="10px">
            <Button
              onClick={() => assignCid(session)}
              colorScheme="green"
              leftIcon={<BsFillTelephonePlusFill />}
            >
              Take-up Call
            </Button>
            <Button
              onClick={onClose}
              colorScheme="red"
              leftIcon={<BsFillTelephoneXFill />}
            >
              Opt-out
            </Button>
          </HStack>
        </Box>
      </Flex>
    </>
  );
};

export default SosCard;
