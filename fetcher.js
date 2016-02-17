"use strict";

document.getElementById('excl').addEventListener('click', () => {
  fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then((info) => info.json())
    .then((r) => {
      loc.setItem('a', JSON.stringify(r));

      document.getElementById('r').innerText += '\n\n' + loc.getItem('a');
    });
});
