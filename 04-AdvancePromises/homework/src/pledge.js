"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise(executor) {
  if (typeof executor !== "function")
    throw new TypeError("executor is not a function");

  this._state = "pending";
  this._handlerGroups = [];
  executor(
    (data) => this._internalResolve(data),
    (data) => this._internalReject(data)
  );
}
$Promise.prototype._internalResolve = function (data) {
  if (this._state === "pending") {
    this._state = "fulfilled";
    this._value = data;
    this._callHandlers();
  }
};
$Promise.prototype._internalReject = function (data) {
  if (this._state === "pending") {
    this._state = "rejected";
    this._value = data;
    this._callHandlers();
  }
};
$Promise.prototype.then = function (successCb, errorCb) {
  if (typeof successCb !== "function") {
    successCb = false;
  }
  if (typeof errorCb !== "function") {
    errorCb = false;
  }
  this._handlerGroups.push({
    successCb,
    errorCb,
  });
  if (this._state !== "pending") this._callHandlers();
};
$Promise.prototype._callHandlers = function () {
  while (this._handlerGroups.length) {
    var actual = this._handlerGroups.shift();
    if (this._state === "fulfilled") {
      if (actual.successCb) actual.successCb(this._value);
    } else {
      if (actual.errorCb) actual.errorCb(this._value);
    }
  }
};

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
