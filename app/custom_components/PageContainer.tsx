import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};

export default PageContainer;
