import React, { useState, useCallback, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import socketIOClient from 'socket.io-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = socketIOClient('http://192.168.1.29:5000/chat');
    socket.on('connect', () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
    socket.on('start', (arg) => {
      setMessages([
        {
          _id: 0,
          text: arg,
          createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
          system: true,
          // Any additional custom parameters are passed through
        },
      ]);
    });
  }, []);

  const onSend = useCallback((messages = []) => {
    socket.emit('message', messages);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default Chat;

const styles = StyleSheet.create({});
