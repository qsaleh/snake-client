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
  } else if (key === '1'){
    conn.write('Say: LOL newb');
  } else if (key === '2'){
    conn.write('Say: ur snek sux');
  } else if (key === '3'){
    conn.write('Say: go flams go');
  } else if (key === '4'){
    conn.write('Say: oilahz suk');
  } else if (key === '5'){
    conn.write('Say: Edmonton = NoGood');
  }
 return stdin; 
}

}

module.exports = { setupInput };