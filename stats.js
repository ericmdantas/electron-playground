"use strict";

var mem = process.memoryUsage();

setInterval(() => {
  mem = process.memoryUsage();

  document.getElementById('rss').innerText = mem.rss;
  document.getElementById('heapTotal').innerText = mem.heapTotal;
  document.getElementById('heapUsed').innerText = mem.heapUsed;
}, 500);
