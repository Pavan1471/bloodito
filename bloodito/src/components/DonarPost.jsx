import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  onOpen,
  isOpen,
  onClose,
  useDisclosure,
  Input,
  Select
} from "@chakra-ui/react";
import plus from "./plus.png";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
function DonarPost() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
   
        <img onClick={onOpen} src={plus} className="post-icon"></img>
    

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Donate Blood</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
              <FormLabel>Mobile number</FormLabel>
              <Input type="number" />
              <FormLabel>Address</FormLabel>
              <Input type="text" />
              <FormLabel>Blood type</FormLabel>
              <Select placeholder="Select blood type">
                <option>O+</option>
                <option>O-</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Donate
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default DonarPost;
