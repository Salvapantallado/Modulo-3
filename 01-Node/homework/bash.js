const commands = require("./commands");

// Output un prompt
process.stdout.write("prompt > ");
process.stdin.on("data", function (data) {
  var args = data.toString().trim().split(" ");
  var cmd = args.shift();
  if (commands[cmd]()) {
    commands[cmd](args);
  }
  process.stdout.write("\nprompt > ");
});
const cmd = "pwd";
