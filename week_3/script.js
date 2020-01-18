var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");


openButton.onclick = function() {
    modalOverlay.style.display = "block";
    modal.style.display = "block";
}

closeButton.onclick = function() {
    modalOverlay.style.display = "none";
    modal.style.display = "none";
}
