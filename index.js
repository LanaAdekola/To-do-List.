let inputEl = document.getElementById("input-el")
let addbtn = document.getElementById("add-btn")
let paragraph = document.getElementById("paragraph")

addbtn.addEventListener("click" function() {
let inputvalue = inputEl.value
paragraph.textContent = inputvalue
})