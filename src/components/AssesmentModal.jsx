import {
	Box,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	SkeletonCircle,
	SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const AssesmentModal = ({ isOpen, onClose }) => {
	return (
		<div>
			<Modal
				size="xl"
				motionPreset="slideInBottom"
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Your Online Mental Health Assesment.</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<SkeletonCircle size="10" />
						<SkeletonText mt="4" noOfLines={4} spacing="4" />
						<SkeletonText mt="5" noOfLines={4} spacing="4" />
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button colorScheme="teal" variant="ghost">
							Generate Assesment
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default AssesmentModal;
