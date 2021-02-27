import React, { useState, useCallback, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { useRoute } from '@react-navigation/native';
import socketIOClient from 'socket.io-client';
import {
  initiateSocket,
  initiateOnlineSocket,
  userIsOnline,
  systemMessage,
  disconnectSocket,
  sendPrivateMessage,
  recievePrivateMessage,
  isUserTyping,
} from '_utils/chatUtil';
import RootSelector from '_containers/RootScreen/selectors';

const renderBubble = (props) => (
  // Step 3: return the component
  <Bubble
    {...props}
    wrapperStyle={{
      left: {
        // Here is the color change
        backgroundColor: '#6646ee',
      },
    }}
    textStyle={{
      left: {
        color: '#fff',
      },
    }}
  />
);

// const socket = socketIOClient('http://192.168.1.29:5207/chat');
const Chat = () => {
  const { params } = useRoute();
  const { userProfile } = useSelector(RootSelector);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    initiateOnlineSocket();

    // socket.on('start', (arg) => {

    // });

    return () => disconnectSocket();
  }, []);

  useEffect(() => {
    userIsOnline(userProfile.email);
  }, [userProfile]);

  useEffect(() => {
    systemMessage((arg) => {
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

  useEffect(() => {
    // recievePrivateMessage((msg) =>
    //   console.log('here is the reciever msg', msg),
    // );
    recievePrivateMessage((msg) => {
      console.log('here is the reciever msg', msg);
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, msg),
      );
    });
  }, []);

  const onSend = useCallback(
    (messages = []) => {
      const sentMessage = [{ ...messages[0], sent: true }];
      sendPrivateMessage(sentMessage, params.email);
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages),
      );
    },
    [params.email],
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      showUserAvatar
      showAvatarForEveryMessage
      renderBubble={renderBubble}
      user={{
        _id: userProfile._id,
        username: userProfile.username,
        avatar: 'https://source.unsplash.com/random/800x600',
      }}
    />
  );
};

export default Chat;

const styles = StyleSheet.create({});
