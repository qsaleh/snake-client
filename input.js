const net = require('net');
const stdin = process.stdin;
let connection;

const setupInput = function(conn) {
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput); 

  function handleUserInput(key) {
  if (key === '\u0003'){
  process.exit();
  } else if (key === 'w'){
    conn.write('Move: up');
  } else if (key === 'a'){
    conn.write('Move: left');
  } else if (key === 's'){
    conn.write('Move: down');
  } else if (key === 'd'){
    conn.write('Move: right');
  }
 return stdin; 
}

}

module.exports = { setupInput };