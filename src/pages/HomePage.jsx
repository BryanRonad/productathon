import {
	Box,
	Button,
	chakra,
	Icon,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import animationData from "../lottie/mental-health.json";

const HomePage = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<>
			<div className="hero-section">
				<Box px={8} py={24} mx="auto">
					<Box
						w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
						mx="auto"
						textAlign={{ base: "left", md: "center" }}
					>
						<chakra.h1
							mb={6}
							fontSize={{ base: "4xl", md: "6xl" }}
							fontWeight="bold"
							lineHeight="none"
							letterSpacing={{ base: "normal", md: "tight" }}
							color={useColorModeValue("gray.900", "gray.100")}
						>
							Find your
							<Text
								display={{ base: "block", lg: "inline" }}
								w="full"
								bgClip="text"
								bgGradient="linear(to-r, green.400,purple.500)"
								fontWeight="extrabold"
							>
								mental solace
							</Text>{" "}
							in one single click.
						</chakra.h1>
						<chakra.p
							px={{ base: 0, lg: 24 }}
							mb={6}
							fontSize={{ base: "lg", md: "xl" }}
							color={useColorModeValue("gray.600", "gray.300")}
						>
							MindAid is where you can take a step in the right direction for
							your mental comfort. Connect with our experienced counsellors and
							bring forth your inner peace.
						</chakra.p>
						<Stack
							direction={{ base: "column", sm: "row" }}
							mb={{ base: 4, md: 8 }}
							spacing={2}
							justifyContent={{ sm: "left", md: "center" }}
						>
							<Link to="/signup/onboard">
								<Button
									as="a"
									bgColor="blue.100"
									display="inline-flex"
									alignItems="center"
									justifyContent="center"
									w={{ base: "full", sm: "auto" }}
									mb={{ base: 2, sm: 0 }}
									size="lg"
									cursor="pointer"
								>
									Explore
									<Icon
										boxSize={4}
										ml={1}
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
									</Icon>
								</Button>
							</Link>
							<Link to="/signup/free">
								<Button
									as="a"
									colorScheme="red"
									display="inline-flex"
									alignItems="center"
									justifyContent="center"
									w={{ base: "full", sm: "auto" }}
									mb={{ base: 2, sm: 0 }}
									size="lg"
									cursor="pointer"
								>
									Chat with a professional immediately.
									<Icon
										boxSize={4}
										ml={1}
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
											clipRule="evenodd"
										/>
									</Icon>
								</Button>
							</Link>
						</Stack>
					</Box>
					<Box
						w={{ base: "full", md: 10 / 12 }}
						mx="auto"
						mt={20}
						textAlign="center"
					>
						<Lottie options={defaultOptions} />
					</Box>
				</Box>
			</div>
		</>
	);
};

export default HomePage;
