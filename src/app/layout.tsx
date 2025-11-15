import React from "react";

import { NextAuthProvider, ReduxProvider } from "app/providers";
import "styles/globals.scss";

export const metadata = {
  title: "Next App Starter",

  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
  blog
}: {
  children: React.ReactNode,
  blog: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NextAuthProvider>
          <ReduxProvider>
            {children}
            {blog}
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
