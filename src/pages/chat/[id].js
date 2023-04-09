import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Sidebar from "../../../components/Sidebar";
import ChatScreen from "../../../components/ChatScreen";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import getRecipientEmail from "../../../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";

function Chat({ messages, chat }) {
  const [user] = useAuthState(auth);
  return (
    <Container>
      <Head>
        <title>Chat with {getRecipientEmail(chat.users, user)}</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen chat={chat} messages={messages} />
      </ChatContainer>
    </Container>
  );
}

export default Chat;

export async function getServerSideProps(context) {
  const ref = query(
    collection(db, `chats/${context.query.id}/messages`),
    orderBy("timestamp", "asc")
  );
  //PREP the messages on the server
  const messagesRes = await getDocs(ref);

  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  //PREP the chats
  const chatRes = await getDocs(ref);
  const chat = chatRes.docs.map((c) => ({
    id: c.id,
    ...c.data(),
  }));

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: JSON.stringify(chat),
    },
  };
}

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
