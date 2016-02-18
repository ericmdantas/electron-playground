"use strict";

var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

class Auth extends EventEmitter {
  gogo() {
    setTimeout(() => {
      this.emit('YO!', {heh: true});
    }, 2000);
  }
}
