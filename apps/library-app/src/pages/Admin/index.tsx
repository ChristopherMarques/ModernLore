import AdminSideBar from "@/components/AdminSideBar";
import firebaseAdmin from "@/services/firebaseAdmin";
import { GetServerSidePropsContext } from "next";
import React, { ReactNode } from "react";

import nookies from "nookies";

const Admin = ({ children }: { children: ReactNode }) => {
  return <AdminSideBar>{children}</AdminSideBar>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    await firebaseAdmin.auth().verifyIdToken(cookies.token);

    return {
      props: {},
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

export default Admin;
