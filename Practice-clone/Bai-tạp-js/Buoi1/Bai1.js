
const fruitList = [
    "apple",
    "banana",
    "tomato",
    "watermelon",
    "strawberry",
    "cherry",
    "coconut",
];

const x = document.querySelector(".fruit-list");
let y = [];

for(let i = 0; i < fruitList.length; i++) {
    let d = fruitList[i];
    y += `<li>${d}</li>`;
}

x.innerHTML = y;




