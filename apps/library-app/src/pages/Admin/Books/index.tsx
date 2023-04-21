import firebaseAdmin from "@/services/firebaseAdmin";

import nookies from "nookies";
import React from "react";
import { GetServerSidePropsContext } from "next";

import BooksPageComponent from "@/components/BooksPageComponent/BooksPageComponent";

const BooksPage = ({ books }: any) => {
  return <BooksPageComponent booksData={books} />;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    await firebaseAdmin.auth().verifyIdToken(cookies.token);

    const resBooks = await fetch(`http://localhost:3001/books`);
    const books = await resBooks.json();

    return {
      props: { books: books },
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {} as never,
    };
  }
};

export default BooksPage;
