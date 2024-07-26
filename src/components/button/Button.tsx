import React from "react";

type ButtonProps = {
  title: string;
  handleClick(): void;
  testId: string;
};

const Button = (props: ButtonProps) => {
  const { title, handleClick, testId } = props;
  return (
    <div
      data-testid={testId}
      className={"bg-custom-purple rounded-lg max-w-40 p-2"}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center w-full h-full cursor-pointer">
        <p className=" text-text-primary font-bold text-sm text-center">{title}</p>
      </div>
    </div>
  );
};

export default Button;
