import { useState } from "react";


export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-amber-100 px-2 m-3 border-dashed border-2 border-green-500">
      <p className="italic">
        remote GroupuiButton from app 2
      </p>

    </div>
  );
}
