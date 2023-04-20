import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

export default function BoxCard({ name, image, description }: any) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"1xl"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          alignContent={"center"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "200px",
            pos: "absolute",
            top: 10,
            left: 0,
            opacity: 0.2,
            backgroundImage: `url(${image})`,
            filter: "blur(20px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(5px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            alt={""}
            objectFit={"contain"}
            src={image}
          />
        </Box>
        <Stack pt={10}>
          <Heading
            fontSize={"1xl"}
            alignSelf={"center"}
            fontFamily={"body"}
            fontWeight={800}
          >
            {name}
          </Heading>
          <Stack direction={"row"}>
            <Text fontWeight={500} align={"center"} fontSize={"xs"}>
              {description}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
