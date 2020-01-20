var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var val = document.getElementById("val");

val.value = 0;
val.disabled = true;


function lisiningBtn(event) {
    plus.addEventListener('click', function(){incrDecrOne("plus")});
    minus.addEventListener('click', function(){incrDecrOne("minus")});
}

function incrDecrOne(add) {
    if (add == "plus") {
        val.value++;
    } else if (add == "minus") {
        val.value--;
    }
}

lisiningBtn();
val.textContent = val;