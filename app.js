// *********** select items ************
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
//  edit option
let editElement;
let editFlag = false;
let editID = "";

// ********* event listeners ************

// submit form
form.addEventListener("submit", addItem);
//  clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

//  ******* functions *************

// add item
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value !== "" && !editFlag) {
        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
    }
}