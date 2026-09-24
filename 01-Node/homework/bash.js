const commands = require('./commands');
const date = 'date'
// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remueve la nueva línea
  if(cmd === 'date') {
   commands[date]() 
  }
  if(cmd === 'pwd') {
    process.stdout.write(process.execPath);
  }
  process.stdout.write('\nprompt > ');
});

// console.log(Object.keys(process))