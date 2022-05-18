import BoxCard from "@/components/BoxCard";
import PriceSection from "@/components/PriceSection";
import {
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Books: NextPage = ({ books }: any) => {
  return (
    <Container maxW={"8xl"}>
      <Head>
        <title>Books</title>
      </Head>
      <Center my={10}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          See our
          <Text as={"span"} color={"brand.300"}>
            {" "}
            Best books
          </Text>
        </Heading>
      </Center>
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
      <PriceSection />
    </Container>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/books`);
  const books = await res.json();

  return { props: { books } };
}

export default Books;
