const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
} 

add.addEventListener("click", ()=> {
  count = count + 1;
  updateText();
}); 

minus.addEventListener("click", ()=> {
  count = count - 1;
  updateText();
})


