/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  function domainGenerator(pronounAr, adjAr, nounAr) {
    let list = document.getElementById("domain");
    for (let i = 0; i < pronounAr.length; i++) {
      for (let j = 0; j < adjAr.length; j++) {
        for (let k = 0; k < nounAr.length; k++) {
          let result = pronounAr[i] + adjAr[j] + nounAr[k] + ".com";
          let li = document.createElement("li");
          let text = document.createTextNode(result);
          li.appendChild(text);
          list.appendChild(li);
        }
      }
    }
  }
  domainGenerator(pronoun, adj, noun);
};
