// Bài 1 
function string(x) {
    let newString = x.toLowerCase().split(" ");
    for(let i = 0; i < newString.length; i++) {
        newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
    }
    return newString.join(" ");   
}

// Bài 2
function reverse(x) {
    let str = x.toLowerCase();
    let newReverse = str.split("").reverse().join("");
    if(str === newReverse) {
        return true;
    } else {
        return false;
    }
}


// Bài 3
function sortAge(x) {
    x.sort(function(a,b){return b.age - a.age});
    return x;
}

// Bài 4
function find(x) {
    let newFind = [];
    for(let i = 0; i < x.length; i++) {
        if(x[i].name[0] === "H" || x[i].name[0] === "h") {
            newFind.push(x[i]);
        }
    }
    return newFind;
}