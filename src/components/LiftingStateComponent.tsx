import React, { useState } from "react";

export default function LiftingStateComponent() {
  const [amount, setAmount] = useState(0);

  return <div>LiftingStateComponent</div>;
}
function ChildrenA({ sa }: { sa: () => void }) {
  return (
    <>
      <button onClick={() => sa()}>Update Amount</button>
    </>
  );
}

function ChildrenB(amount: number) {
  return (
    <>
      <h1>Here is the update amount: {amount}</h1>
    </>
  );
}
