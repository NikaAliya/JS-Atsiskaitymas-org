const clickButton = document.getElementById("clickButton");
const btnState = document.getElementById("btn__state");
let clickCount = 0;

clickButton.addEventListener("click", () => {
  clickCount++;
  btnState.textContent = clickCount;
});
