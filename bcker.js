"use strict";

setInterval(() => {
  var _f = ~~(Math.random() * 3) + 1;

  document.body.style.backgroundImage = `url(bkgs/${_f}.jpg)`;
}, 3000);
