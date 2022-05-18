import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import {
  IoBookOutline,
  IoBookmarksOutline,
  IoCloudyOutline,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const IMAGE =
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80";

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"brand.200"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("brand.400", "brand.300")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>A digital library of the best sellers</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoBookOutline} color={"yellow.300"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.500")}
              text={"A lot of titles"}
            />
            <Feature
              icon={
                <Icon as={IoBookmarksOutline} color={"green.300"} w={5} h={5} />
              }
              iconBg={useColorModeValue("green.100", "green.500")}
              text={"You can favorite your books"}
            />
            <Feature
              icon={
                <Icon as={IoCloudyOutline} color={"purple.300"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.500")}
              text={"Cloud delivery"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"lg"}
            alt={"feature image"}
            src={IMAGE}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
