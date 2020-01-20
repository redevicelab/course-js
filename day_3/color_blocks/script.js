var cont = document.getElementById("cont"),
btn = document.getElementById("btn");

function addBlock(){    
    var block = document.createElement("div");
    block.style.display = "inline-block";
    block.style.width = "50px";
    block.style.height = "50px";
    var r, g, b;
    r = Math.random() * 256;
    g = Math.random() * 256;
    b = Math.random() * 256;
    block.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    block.onclick = delBlock;
    cont.append(block);
}

btn.onclick = addBlock;

function delBlock(){
    this.remove();
}