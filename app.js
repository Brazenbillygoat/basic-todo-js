//declaring variables
let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

//giving functionality to the button when it is clickedbut using
//'submit' because if I use 'click' as the first argument then
//the form will be submitted just by clicking in the text box
ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(ourField.value)
})


function createItem(x) {
    if (ourField.value.trim() !== "") {
        let ourHTML = `<li> ${x} <button onclick= "deleteItem(this)">Delete</button></li>`
        ourList.insertAdjacentHTML("beforeend", ourHTML)
    }

    ourField.value = ""
    ourField.focus()
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}