import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Button } from "./Button";
import { Input } from "./Input";

function App() {
  return (
    <>
      <Header title='here' />
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
        }}>
        <p>Hello world</p>
      </Button>
      <div>
        <Input />
      </div>
    </>
  );
}

export default App;
