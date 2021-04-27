function sumArray(array, n) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] + array[j] === n) return true;
    }
  }
  return false;
}

function pluck(array, prop) {
  return array.map((elem) => elem[prop]);
}

module.exports = {
  sumArray,
  pluck,
};
