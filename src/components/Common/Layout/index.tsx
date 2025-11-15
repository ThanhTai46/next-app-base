import React from "react";

import Header from "components/Common/Header";

const Layout: React.FC<React.PropsWithChildren<unknown>> = ({ children, blog }: {children: any ,blog: React.ReactNode}) => (
  <div>
    <Header
      links={[
        {
          title: "Contact",
          url: "/contact",
        },
      ]}
    />
    { blog}
    {children}
  </div>
);

export default Layout;
