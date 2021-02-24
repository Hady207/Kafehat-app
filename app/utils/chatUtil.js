import io from 'socket.io-client';

let socket;
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
  socket.on('start', (sysM) => {
    return cb(sysM);
  });
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
