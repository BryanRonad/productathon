import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";

export function Layout(props) {
	console.log(props.children);
	return (
		<>
			<Navbar />
			<Container maxW="container.xxl">{props.children}</Container>
		</>
	);
}
