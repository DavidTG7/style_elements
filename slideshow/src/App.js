import React from "react";
import Slideshow from "./components/Slideshow";
import styled from "styled-components";
import "./styles.css";

const App = () => {
  return (
    <main>
      <Title>Products</Title>
      <Slideshow />
    </main>
  );
}


const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px;
`;

export default App;