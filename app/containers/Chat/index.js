import React, { useState, useCallback, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import { useRoute } from '@react-navigation/native';
import socketIOClient from 'socket.io-client';
import {
  initiateSocket,
  systemMessage,
  disconnectSocket,
  sendPrivateMessage,
} from '_utils/chatUtil';
import RootSelector from '_containers/RootScreen/selectors';

const socket = socketIOClient('http://192.168.1.29:5207/chat');
const Chat = () => {
  const { params } = useRoute();
  const { userProfile } = useSelector(RootSelector);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    initiateSocket();

    // socket.on('start', (arg) => {

    // });

    return () => disconnectSocket();
  }, []);

  // useEffect(() => {
  //   systemMessage((arg) => {
  //     setMessages([
  //       {
  //         _id: 0,
  //         text: arg,
  //         createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
  //         system: true,
  //         // Any additional custom parameters are passed through
  //       },
  //     ]);
  //   });
  // }, []);

  const onSend = useCallback((messages = []) => {
    sendPrivateMessage(messages);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: userProfile._id,
        username: userProfile.username,
      }}
    />
  );
};

export default Chat;

const styles = StyleSheet.create({});
