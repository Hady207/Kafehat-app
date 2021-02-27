import { ScreenStackHeaderConfig } from 'react-native-screens';
import io from 'socket.io-client';
import { Config } from '_config';

let socket;

export const initiateOnlineSocket = () => {
  socket = io(`${Config.API_DEV_URL}chat`);
  console.log(`Connecting socket...`);
};
export const initiateSocket = (room) => {
  socket = io('http://192.168.1.29:5207/chat');
  console.log(`Connecting socket...`);
  if (socket && room) socket.emit('join', room);
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
};

export const systemMessage = (cb) => {
  socket.on('start', (systemMsg) => {
    return cb(systemMsg);
  });
};

export const userIsOnline = (userEmail) => {
  if (socket) socket.emit('isOnline', userEmail);
};

export const subscribeToChat = (cb) => {
  if (!socket) return true;
  socket.on('chat', (msg) => {
    console.log('Websocket event received!');
    return cb(null, msg);
  });
};

export const sendPrivateMessage = (message, userSocket) => {
  if (socket) socket.emit('chat', { userSocket, message });
};

export const isUserTyping = (cb) => {
  socket.on('message', (value) => {
    console.log(value);
    cb(value);
  });
};

export const recievePrivateMessage = (cb) => {
  socket.on('message', (msg) => {
    console.log(msg);
    cb(msg);
  });
};
