let input = document.querySelector(".inputBox");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.innerText == "=") {
      string = String(eval(string));
      input.value = string;
    } else if (e.target.innerText == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerText == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerText;
      input.value = string;
    }
  });
});
