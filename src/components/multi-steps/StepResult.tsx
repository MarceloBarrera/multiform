import React from "react";

const StepResult = ({ title }: { title: string }) => {
  return (
    <>
      <p>{title}!</p>
      <p>
        Please verify your email address you should have received an email from
        us already.
      </p>
    </>
  );
};

export default StepResult;
