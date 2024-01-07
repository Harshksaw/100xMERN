import "./App.css";
import React from "react";
import Header from "../components/Header";

function App() {
  return (
    <>
      <CardWrapper>
        <Header />
      </CardWrapper>
    </>
  );
}

export default App;

function CardWrapper({ children }) {
  return (
    <>
      <div
        className={{
          border: "5px solid blue",
          margin: "auto",
          backgroundColor: "blue",
          padding: 20,
        }}
      >
        {children}
      </div>
    </>
  );
}
