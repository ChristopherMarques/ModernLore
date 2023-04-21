import AboutSection from "@/components/AboutSection";
import BoxCard from "@/components/BoxCard";
import HeroSection from "@/components/HeroSection";
import MiddlePageSection from "@/components/MiddlePageSection";
import PriceSection from "@/components/PriceSection";
import {
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = ({ books, authors }: any) => {
  return (
    <div>
      <Head>
        <title>Library App</title>
      </Head>
      <Container maxW={"100vw"} overflowX={"hidden"}>
        <HeroSection />
        <MiddlePageSection />
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {books.map((book: any, index: any) => {
            return (
              <GridItem w="auto" h="auto" key={index}>
                <BoxCard
                  name={book?.name}
                  image={book?.image}
                  description={book?.description}
                />
              </GridItem>
            );
          })}
        </Grid>
        <AboutSection />
        <Center my={10}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            See our
            <Text as={"span"} color={"brand.300"}>
              {" "}
              Best authors
            </Text>
          </Heading>
        </Center>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {authors.map((book: any, index: any) => {
            return (
              <GridItem w="auto" h="auto" key={index}>
                <BoxCard
                  name={book?.name}
                  image={book?.image}
                  description={book?.description}
                />
              </GridItem>
            );
          })}
        </Grid>
        <PriceSection />
      </Container>
    </div>
  );
};

export async function getServerSideProps() {
  const resBooks = await fetch(`http://localhost:3001/books?limit=3`);
  const books = await resBooks.json();
  const resAuthors = await fetch(`http://localhost:3001/authors?limit=3`);
  const authors = await resAuthors.json();

  return { props: { books, authors } };
}

export default Home;
