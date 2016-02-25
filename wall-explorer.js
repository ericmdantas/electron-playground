"use strict";

let _walls = fs.readdirSync('C:/Users/_eric/Documents/wallpapers');

setInterval(() => {
  document.body.style.backgroundImage = `url(${_walls[~~(Math.random() * _walls.length)]})`;
}, 3000);
