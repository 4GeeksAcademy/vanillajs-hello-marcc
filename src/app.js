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

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        html += p + a + n + ".com <br>";
      }
    }
  }

  document.getElementById("domains").innerHTML = html;

};