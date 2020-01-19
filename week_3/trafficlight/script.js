var btn = document.querySelector("#btn")
var redColor = document.getElementById('red');
var yellowColor = document.getElementById('yellow');
var greenColor = document.getElementById('green');
var countPressBtn = 0;

function changeColor() {
        if (countPressBtn == 0) {
            redColor.style.backgroundColor = "red";
            yellowColor.style.backgroundColor = 'grey';
            greenColor.style.backgroundColor = 'grey';
            countPressBtn++;
        }
        else if (countPressBtn == 1){
            redColor.style.backgroundColor = "grey";
            yellowColor.style.backgroundColor = 'yellow';
            greenColor.style.backgroundColor = 'grey';
            countPressBtn++;
        }
        else if (countPressBtn == 2){
            redColor.style.backgroundColor = "grey";
            yellowColor.style.backgroundColor = 'grey';
            greenColor.style.backgroundColor = 'green';
            countPressBtn = 0;
        }
}

btn.onclick = changeColor;