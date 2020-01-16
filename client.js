const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: QMS');
  });
  conn.on('connect', () => {
    // setInterval(() => {conn.write('Move: up')}, 200);
    // setInterval(() => {conn.write('Move: up')}, 200);
    // setInterval(() => {conn.write('Move: left')}, 200);
    // setInterval(() => {conn.write('Move: left')}, 200);
    // setInterval(() => {conn.write('Move: left')}, 200);
    // setInterval(() => {conn.write('Move: up')}, 200);
    // setInterval(() => {conn.write('Move: right')}, 200);
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = { connect };

