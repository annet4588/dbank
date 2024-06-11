import {dbank} from "../../declarations/dbank";

window.addEventListener("load", async function(){
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount *100) /100;
});

document.querySelector("form").addEventListener("submit", async function(event){
  console.log("Submitted");
});