"use strict";

let auth = new Auth();

auth.gogo();

auth.on('YO!', (info) => {
  console.log(info);
});
