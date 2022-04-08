let masonry = document.getElementsByClassName("masonry")

let windowWidth = 0;
let columnWidth = 200;
let columnsQuantity = null;
window.addEventListener('resize', function(){
    windowWidth = document.body.clientWidth;
    columnsQuantity = Math.floor(windowWidth/columnWidth);
    console.log(columnsQuantity , "columns")
}, true)