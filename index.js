let inputEl = document.getElementById("input-el")
let addBtn = document.getElementById("add-btn")
let paragraph = document.getElementById("paragraph")
let myLeads = []

addBtn.addEventListener("click", function(){
   myLeads.push(inputEl.value)
  render()
  inputEl.value = ""
})
function render() {
    let skills = ""
    for (let i = 0; i < myLeads.length; i++){
    skills += 
            `
            <li>${myLeads[i]}</li>
            `
    }
paragraph.innerHTML = skills

}
