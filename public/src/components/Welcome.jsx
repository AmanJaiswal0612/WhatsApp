import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import welcome from "../assets/welcome.png"
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
   setU();
  }, []);

  const setU= async()=>{
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }
  return (
    <Container>
      <img src={welcome} alt="" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;

`;