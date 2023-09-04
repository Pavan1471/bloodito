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
  Select,
} from "@chakra-ui/react";
import plus from "./plus.png";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
function DonarPost() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [bloodType, setBloodType] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit = async (event) => {
    event.preventDefault();
    onClose();
    console.log("hii");
    console.log(mobile);
    try {
      const response = await axios.post("http://localhost:5000/donation", {
        name: name,
        mobilenumber: mobile,
        address: address,
        bloodtype: bloodType,
      });
      console.log(response.status);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };
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
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel>
                Mobile number
              </FormLabel>
              <Input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {/* <Input type="text" /> */}
              <FormLabel>Blood type</FormLabel>
              <Select
                type="text"
                placeholder="Select blood type"
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
              >
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
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
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


// type="number"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}