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

//inserting my html items with javascript makes this block reusable and
//looks more clean overall in my opinion
function createItem(x) {
    if (ourField.value.trim() !== "") {
        let ourHTML = `<li> ${x} <button onclick= "deleteItem(this)">Delete</button></li>`
        ourList.insertAdjacentHTML("beforeend", ourHTML)
    }
    //sets the text box back to blank so user doesn't have to clear it
    //and puts the cursor back in the text box so user doesn't have to 
    //select the text box after each entry when adding multiple todos
    ourField.value = ""
    ourField.focus()
}

//deletes the delete button itself and it's parent <li> element
function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}