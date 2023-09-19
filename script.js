const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");




createbtn.addEventListener("click", ()=>{
    // console.log("hii")
    let inputboxs = document.createElement("p");
    let img = document.createElement("img");
    inputboxs.className= "input-box";
    inputboxs.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notescontainer.appendChild(inputboxs).appendChild(img); 
})

function shownotes(){
    notescontainer.innerHTML = localStorage.getItem("note")
}
shownotes();

function updatestorage(){
    localStorage.setItem("note",notescontainer.innerHTML);
}

notescontainer.addEventListener("click", (e)=>{
    console.log(e);
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updatestorage();
            }
        })
    }
})

document.addEventListener("keydown", function (event) {
        console.log(event);
        if (event.key ===
            "Enter") {
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    })