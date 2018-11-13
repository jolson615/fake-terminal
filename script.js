console.log("script running")

const submitbutton = document.querySelector("#button1")
const displaybox = document.querySelector(".display")
const inputbox = document.querySelector("input")

submitbutton.addEventListener('click', e => {
  console.log(inputbox)
  console.log(inputbox.value)
  handleInput(inputbox.value)
})

var step = 0
var state = {
  'username' : "Jeff"
}

function handleInput(userInput) {
  if (step == 0) {
    displaybox.innerHTML = "Hello! Welcome to the game!<br>Please enter your username"
    step = 1
  } else if (step == 1) {
    displaybox.innerHTML += `<br><br>Welcome ${userInput}<br>Please select a password.`
    state.username = userInput
    step = 2
  }
}
