const a = document.querySelector('ul');

var x = document.querySelectorAll("li:first-child");

var y = document.querySelectorAll("li:last-child");

const z = document.createElement('li');


for(let i = 0; i < x.length; i++) {
    x[i].innerHTML = "First";
    y[i].innerHTML = "Last";
}


console.log(x);




