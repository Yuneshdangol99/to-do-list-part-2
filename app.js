const inputbox = document.querySelector('#search-box');
const listcontainer = document.querySelector('#list-container');


function addtask() {
    if(inputbox.value === "") {
        alert("hey dumb boy write something");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = `<i class="fa-solid fa-xmark" style="color: red"></i>`;
        li.appendChild(span);
    } 
    inputbox.value = "";
    savedata();
}

listcontainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } 
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);


function savedata() {
    localStorage.setItem('data', listcontainer.innerHTML);
}

function getdata() {
    listcontainer.innerHTML = localStorage.getItem('data');
}
getdata();