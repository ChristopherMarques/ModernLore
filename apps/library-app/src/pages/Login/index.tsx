// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useAuth } from "@/providers/AuthContext";

import { useForm } from "react-hook-form";

import {
  Button,
  Container,
  Box,
  Text,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [error, setError] = useState();
  const { userLogin } = useAuth();
  const router = useRouter();

  const handleUserLogin = async (userData) => {
    try {
      const user = await userLogin(userData);

      if (user) {
        router.push("/Books");
      }
    } catch (err) {
      setError("User or password is invalid");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <Container
      maxWidth={"auto"}
      width={"100vw"}
      height={"100vh"}
      //backgroundImage={"background.png"}
      backgroundSize={"100%"}
      objectFit={"cover"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Container>
        <Box>
          <Flex
            bg={useColorModeValue("brand.200", "brand.300")}
            borderRadius={"4px"}
            boxShadow={"lg"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            padding={"2rem"}
          >
            <Text
              fontWeight={700}
              lineHeight={1.2}
              fontSize={"3xl"}
              textAlign={"center"}
              marginBottom={"1rem"}
            >
              Admin Login
            </Text>
            <form onSubmit={handleSubmit(handleUserLogin)}>
              <FormControl isInvalid={errors.name} isRequired>
                <FormLabel htmlFor={"email"}>Email</FormLabel>
                <Input
                  marginBottom={"1rem"}
                  id={"email"}
                  {...register("email")}
                />
                <FormLabel htmlFor={"password"}>Password</FormLabel>
                <Input
                  marginBottom={"1rem"}
                  id={"password"}
                  {...register("password")}
                  type={"password"}
                />
                {error && (
                  <Text
                    textAlign={"center"}
                    color={"white"}
                    marginBottom={"1rem"}
                  >
                    {error}
                  </Text>
                )}
                <Button
                  bg={useColorModeValue("gray.200", "gray.700")}
                  color={"#fff"}
                  isLoading={isSubmitting}
                  type={"submit"}
                  display={"flex"}
                  margin={"0 auto"}
                  width={"180px"}
                >
                  Login
                </Button>
              </FormControl>
            </form>
          </Flex>
        </Box>
      </Container>
    </Container>
  );
};

export default Login;
