import firebaseAdmin from "@/services/firebaseAdmin";

import nookies from "nookies";
import React from "react";
import { GetServerSidePropsContext } from "next";

import AuthorsPageComponent from "@/components/AuthorsPageComponent/";

const AuthorsPage = ({ authors }: any) => {
  return <AuthorsPageComponent authorsData={authors} />;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    await firebaseAdmin.auth().verifyIdToken(cookies.token);

    const resAuthors = await fetch(`http://localhost:3001/authors`);
    const authors = await resAuthors.json();

    return {
      props: { authors: authors },
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

export default AuthorsPage;
