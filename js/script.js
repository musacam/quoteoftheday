import { quotes } from "./quotes.js";

const quote = document.getElementById("quote");
const whoSaidIt = document.getElementById("whoSaidIt");

function script() {
  const offsetFromDate = new Date(2022, 0, 1);
  const msOffset = Date.now() - offsetFromDate;
  const dayOffset = msOffset / 1000 / 60 / 60 / 24;
  const randomNumber = Math.floor(dayOffset) % quotes.length;
  quote.innerHTML = quotes[randomNumber].quote;
  whoSaidIt.innerHTML = quotes[randomNumber].whoSaidIt;
}

script();
