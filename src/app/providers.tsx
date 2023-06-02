"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { Provider } from "react-redux";

import { store } from "stores";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
