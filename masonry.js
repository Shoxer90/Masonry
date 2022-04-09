let masonry = document.getElementsByClassName("masonry")
let imagesArr = Array.from(this.document.querySelectorAll('li'))

// JS variables
let windowWidth = document.body.clientWidth;
// console.log("windowWidth", windowWidth)
let columnWidth = 200
// let arrOfColumns=[Math.floor(windowWidth/columnWidth)]
// console.log(imagesArr[30].offsetWidth)
const columnsQuantity = Math.floor(windowWidth/columnWidth);
function building(){
    for(let i = 0; i < columnsQuantity; i++){
        let columnDiv = document.createElement('div')
        columnDiv.className = 'columnDiv'
        columnDiv.style.height = "fit content"
        masonry[0].prepend(columnDiv)
        columnDiv.prepend(imagesArr[i])
    }
}
building(windowWidth,columnWidth)

window.addEventListener('resize', function(){
//  currentColumnsQuantity =  document.body.clientWidth/
console.log(windowWidth)     //constant a
console.log(document.body.clientWidth)   //variaBLE
    // building(windowWidth,columnWidth)
    if(Math.floor(windowWidth/columnWidth)+1 === columnsQuantity){
        columnsQuantity+=1
        // arrOfColumns.push(Math.floor(windowWidth/columnWidth))
        building()

       console.log(columnsQuantity , "columns")

    }
}, true)