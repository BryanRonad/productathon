import {
  Button,
  chakra,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VisuallyHidden,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import { db } from "../utils/firebase-config";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({
    about: "",
    fname: "",
    lname: "",
    email: "",
    country: "",
    city: "",
    state: "",
  });
  const ref = db.collection("counsellors");

  useEffect(() => {
    ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (currentUser) {
          if (doc.data().email === currentUser.email) {
            setData(doc.data());
          }
        }
      });
    });
  }, [currentUser]);

  return (
    <>
      {currentUser ? (
        data.isVerified ? (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <AiFillProfile /> My Profile
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <p>{currentUser ? data.fname + data.lname : ""}</p>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <p>{currentUser ? data.email : ""}</p>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Country</FormLabel>
                  <p>{currentUser ? data.country : ""}</p>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>State</FormLabel>
                  <p>{currentUser ? data.state : ""}</p>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>City</FormLabel>
                  <p>{currentUser ? data.city : ""}</p>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>About</FormLabel>
                  <p>{currentUser ? data.about : ""}</p>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="green" mr={3}>
                  Edit
                </Button>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      <chakra.header w="full" px={{ sm: 4 }} py={4} shadow="md">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Link to="/">
              <Icon as={BiPlusMedical} />
              <VisuallyHidden>Mental-piece</VisuallyHidden>
            </Link>
            <chakra.h1 fontWeight="bold" ml="2">
              Mental-piece xD
            </chakra.h1>
          </Flex>

          <HStack color="brand.500">
            {currentUser ? (
              <>
                <Menu>
                  <MenuButton as={Button} leftIcon={<FaRegUserCircle />}>
                    {currentUser.displayName}
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link to="counsellor/dash">Dashboard</Link>
                    </MenuItem>
                    {currentUser ? (
                      <MenuItem onClick={onOpen}>Profile</MenuItem>
                    ) : (
                      ""
                    )}
                  </MenuList>
                </Menu>
                <Button
                  colorScheme="orange"
                  variant="solid"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="counsellor/signin">
                <Button variant="solid">Login as counsellor</Button>
              </Link>
            )}
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};

export default Navbar;
