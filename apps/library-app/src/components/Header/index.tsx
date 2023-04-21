import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAuth } from "@/providers/AuthContext";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, userLogout } = useAuth();
  return (
    <>
      <Box
        bg={useColorModeValue("brand.200", "brand.300")}
        px={10}
        maxW={"100vw"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontWeight={800}>Logo</Box>
          <Flex alignItems={"center"}>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"/"}
            >
              Home
            </Link>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"/Books"}
            >
              Books
            </Link>
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"/Authors"}
            >
              Authors
            </Link>
            {user ? (
              <Text
                px={2}
                py={1}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                onClick={() => userLogout("/Login")}
              >
                Hello, {user.email}
              </Text>
            ) : (
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/Login"}
              >
                Login
              </Link>
            )}
            <Stack direction={"row"} spacing={7}>
              <Button
                onClick={toggleColorMode}
                bg={useColorModeValue("brand.200", "brand.300")}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
