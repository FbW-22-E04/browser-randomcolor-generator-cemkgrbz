
const input = document.querySelector("input");
const button = document.querySelector("button")
const colorBoxes = document.querySelector(".colorBoxes")
const span = document.querySelectorAll("span");

function randomColorGenerator() {
    
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
randomColorGenerator()


button.addEventListener("click", function() {

    for (let i = 0; i < parseInt(input.value); i++) {

        let randomColor = randomColorGenerator();
    
        colorBoxes.insertAdjacentHTML(
          "beforeend",
          `<div class="color" style="background-color: ${randomColor}">${randomColor}<span>x</span></div>`
        );
      }
      input.value = "";
})

colorBoxes.addEventListener("click", function (e) {

    if (e.target.tagName === "SPAN") {
      e.target.parentElement.style.display = "none";
    }
  });
