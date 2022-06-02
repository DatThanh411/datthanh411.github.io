const a = document.querySelector('ul');

var x = document.querySelectorAll("li:first-child");

var y = document.querySelectorAll("li:last-child");


for(let i = 0; i < x.length; i++) {
    x[i].innerHTML = "First";
    y[i].innerHTML = "Last";
}


console.log(x);




