import { Box, Button, chakra, Flex, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import Schedule from "./Schedule";

const CounCard = (counsellor) => {
  let counsellorObj = counsellor.counsellor;
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

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
              {counsellorObj.fname + " " + counsellorObj.lname}
            </chakra.h1>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {counsellorObj.about}
            </chakra.p>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {"Qualifications: " +
                counsellorObj.qualifications.map((ele) => ele + " ")}
            </chakra.p>
          </Flex>
        </Box>
        <Box w={1 / 3} p={{ base: 4, md: 4 }} mt={4}>
          <Button onClick={() => setIsOpen(true)}>Book Appointment</Button>
        </Box>
        <Schedule isOpen={isOpen} onClose={onClose} id={counsellorObj.id} />
      </Flex>
    </>
  );
};

export default CounCard;
