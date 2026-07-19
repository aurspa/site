const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");

const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");


menuButton.onclick = function(){

    sideMenu.classList.add("active");
    overlay.classList.add("active");

};


closeButton.onclick = function(){

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");

};


overlay.onclick = function(){

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");

};
