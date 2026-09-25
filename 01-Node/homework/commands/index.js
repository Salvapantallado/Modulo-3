module.exports = {
    date: function showDate() {process.stdout.write(Date())},
    pwd: function showDirectory() {process.stdout.write(process.execPath)},
    echo: function showEcho(data) {process.stdout.write(data.slice(4))}
};