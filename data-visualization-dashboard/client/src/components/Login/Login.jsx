import React, { useState } from 'react';
import backgroundImage from './bg_img.jpeg';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <Box
     bgImage={`url(${backgroundImage})`}
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        borderColor="white" 
        textAlign="center"
      >
        <h1 style={{ color: 'white' }}>Welcome!!</h1>
        <form>
          <FormControl>
            <FormLabel style={{ color: 'white' }}>Email</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value="dashboard@gmail.com"
              borderColor="white"
              textColor="white" 
              disabled
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel style={{ color: 'white' }}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="1234" 
              borderColor="white"
              textColor="white" 
              disabled
            />
          </FormControl>
          <Button colorScheme="green" mt={6} w="100%" onClick={handleLogin}>
            Login
          </Button>

          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
            <AlertDialogOverlay>
              <AlertDialogContent bg="purple.800" color="white">
                <AlertDialogHeader>Welcome!!</AlertDialogHeader>
                <AlertDialogBody>
                  Dashboard page coming up...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
