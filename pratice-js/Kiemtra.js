// Bài 1
function swap(C) {
    let F;
    if(Number.isInteger(C)) {
        F = C * 9/5 + 32;
    }
    return F;
}


// Bài 2
function secondNumber(number) {
    let newNum = [];
    number.sort(function(a,b) {return b - a});
    for(let i = 0; i < number.length; i++) {
        if(number[i] < number[0]) {
            newNum.push(number[i]);
            break;
        }
    }
    return newNum;
}

// Bài 3
function stringLength(string) {
    string.sort(function(a,b){return b.length - a.length});
    return string[0];
}

// Bài 4
function end(str,target) {
    if(str != "" && target != "") {
        if(str.substr(-1) === target) {
            return true;
        }
        else {
            return false;
        }
    } 
    else {
        return "Tham so truyen vao khong hop le";
    }
}

// Bài 5
function loop(String) {
    String.sort();
    for(let i = 0; i < String.length; i++) {
        for(let j = 1; j < String.length; j++) {
            if (String[i] == String[j]) {
                return true;
            }
            else {  
                return false;
            }
        }
    }
}