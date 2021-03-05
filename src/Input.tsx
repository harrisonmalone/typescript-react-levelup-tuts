import React, { useState, useRef } from "react";

export function Input() {
  const [name, setName] = useState<number | string>(0);
  const ref = useRef<HTMLInputElement>(null);
  console.log(ref?.current?.value);
  return (
    <input
      type='number'
      ref={ref}
      min='0'
      max='10'
      value={name}
      onChange={(e) => {
        if (e.target.value !== "") {
          setName(parseInt(e.target.value));
        } else {
          setName(0);
        }
      }}
    />
  );
}
