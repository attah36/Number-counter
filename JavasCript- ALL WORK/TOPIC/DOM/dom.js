// // SELECTING ELEMENT USING getElementById()
// let first = document.getElementById("first")

// first.style.color = "green"


// // SELECTING ELEMENTS USING querySelector()
// let heading = document.querySelector("h1")

// heading.style.color = "red"
// heading.innerHTML = "I hope you are read to learn"

// //SELECTING ELEMENTS USING queryseletorAll()
// let paragraphs = document.querySelectorAll("p")

// for(i = 0; i <= paragraphs.length; i++){
//     paragraphs[1].style.color = "black"
// }

// // for(i = 0; i <= paragraphs.length; i++){
// //     paragraphs[i].textContent = "Hello, I have been changed using JavaScript"
// // }

// // CHANGE TEXT CONTENT
// first.textContent = "I have change the first conteent using javascript"

let para = document.querySelector("p")

para.classList.add("special")
para.classList.remove("special")