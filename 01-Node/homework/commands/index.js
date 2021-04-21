const request = require("request");
const fs = require("fs");

module.exports = {
  pwd: function () {
    process.stdout.write(process.cwd());
  },

  date: function () {
    process.stdout.write(Date());
  },

  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach((file) => {
        process.stout.write(file + "\n");
      });
      process.stdout.write("\nprompt > ");
    });
  },

  echo: function (args) {
    process.stdout.write(args.join());
  },

  cat: function (args) {
    fs.readFile(args[0], function (error, data) {
      if (error) throw error;
      process.stdout.write(data);
    });
    process.stdout.write("\nprompt > ");
  },

  head: function (args) {
    fs.readFile(args[0], function (error, data) {
      if (error) throw error;
      var lines = data.split("\n").splice(0, 10).join("\n");
      process.stdout.write(lines);
      process.stdout.write("\nprompt > ");
    });
  },

  tail: function (args) {
    fs.readFile(args[0], function (error, data) {
      if (error) throw error;
      var lines = data.split("\n").splice(-10).join("\n");
      process.stdout.write(lines);
      process.stdout.write("\nprompt > ");
    });
  },

  curl: function (args) {
    fs.readFile(args[0], function (error, data) {
      if (error) throw error;
      process.stdout.write(data.body);
      process.stdout.write("\nprompt > ");
    });
  },
};
