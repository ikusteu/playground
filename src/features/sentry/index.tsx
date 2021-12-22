import React from "react";

const Sentry: React.FC = () => {
  return (
    <button
      onClick={() => {
        throw new Error("Why Lisa whyyyy");
      }}
    >
      Release the Hounds
    </button>
  );
};

export default Sentry;
