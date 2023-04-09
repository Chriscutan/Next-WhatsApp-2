import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/whatsapp.png" />
      </Head>

      <LoginContainer>
        <Logo src="https://imgs.search.brave.com/jRtcont1tka0L_Rxg8IsbcWIu5rhiZNpQbnVnrJCORM/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/bmdhbGwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzA0/L1doYXRzQXBwLVBO/Ry1QaWN0dXJlLnBu/Zw" />
        <Button variant="outlined" onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;
