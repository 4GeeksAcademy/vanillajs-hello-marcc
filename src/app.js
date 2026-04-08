import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  let html = "";

  for (let i = 0; i < 8; i++) {

    let p = pronoun[Math.floor(Math.random() * pronoun.length)];
    let a = adj[Math.floor(Math.random() * adj.length)];
    let n = noun[Math.floor(Math.random() * noun.length)];

    html += p + a + n + ".com <br>";
  }

  document.getElementById("domains").innerHTML = html;

};