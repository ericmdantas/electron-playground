"use strict";

document.getElementById('excl').addEventListener('click', () => {
  fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then((info) => info.json())
    .then((r) => {
      document.getElementById('r').innerText += r.body;
    });
});
