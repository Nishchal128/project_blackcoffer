import React from "react";
import Profile from "../assets/about_img.jpg";
import {
  Box,
  Flex,
  Container,
  Heading,
  IconButton,
  Avatar,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <Box
      py={2}
      bgGradient="linear(to-r, #2a4365, #2c5282, #2b6cb0)"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg" color="white">
            Data Visualization Dashboard
          </Heading>
          <Box>
            <Flex align="center">
              <IconButton
                aria-label="Toggle Theme"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                bg="transparent"
                border="none"
                onClick={toggleColorMode}
              />

              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
              <Avatar size="sm" src={Profile} ml={3} />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
