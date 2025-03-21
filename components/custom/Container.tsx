import React, { forwardRef } from "react";

const Container = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
  }
>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={`max-w-screen-xl mx-auto ${className}`}>
      {children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;
