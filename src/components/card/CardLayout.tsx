import React from "react";

type CardLayoutProps = {
  backgroundColor: string;
  children: React.ReactNode;
  border?: string;
};

const CardLayout = (props: CardLayoutProps) => {
  const { backgroundColor, children, border } = props;
  return (
    <div
      className={`${backgroundColor} rounded-2xl ${border} h-full w-full`}
    >
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
};

export default CardLayout;
