let count = document.getElementById('count');
let decrease = document.getElementById('decrease');
let increase = document.getElementById('increase');
let countV = 0;


function increas(){
    countV ++;
    count.innerText = countV;
}

function decreas(){
    countV --;
    count.innerText = countV;
}