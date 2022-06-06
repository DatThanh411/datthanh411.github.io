var lists = document.querySelectorAll('ul');


for(const list of lists) {
    const firstItem = list.firstElementChild;
    const lastItem = list.lastElementChild;

    firstItem.textContent = 'First';
    lastItem.textContent = 'Last';

    list.append(firstItem);
    list.prepend(lastItem);
}

function clock() {
var time = new Date();

var hour = time.getHours();
var minute = time.getMinutes();
var second = time.getSeconds();

document.querySelector('.clock').innerHTML = hour + ":" + minute + ":" + second;
}

setInterval(clock,1000);


const cities = [
    {
        id: 1,
        locate: "vi",
        name: "Hà Nội"
    },
    {
        id: 2,
        locate: "us",
        name: "New York"
    },
    {
        id: 3,
        locate: "jp",
        name: "Tokyo"
    },
];


const select  = document.querySelector("#city");

function createOption(city) {

    const option = document.createElement("option");
    option.textContent = city.name;
    option.value = city.locate;

    return option;
}

function renderOption(cities) {
    for (let city of cities) {
        const option = createOption(city);

        select.append(option);
    }
}

renderOption(cities);


console.log(x);




