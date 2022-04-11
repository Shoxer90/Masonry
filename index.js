let masonry = document.getElementsByClassName("masonry")
let imagesArr = Array.from(this.document.querySelectorAll('li'))
function building(masonry,columnWidth){
    const columnsQuantity = Math.floor(document.body.clientWidth/columnWidth);
        for(let i = 0; i < columnsQuantity; i++){
            let columnDiv = document.createElement('div')
            columnDiv.className = 'columnDiv'
            masonry[0].prepend(columnDiv)
            columnDiv.style.top = `5px`
            columnDiv.style.left = `${i*columnWidth}px`
            console.log(document.getElementsByClassName('columnDiv')[0], "nthColumnDiv")
            columnDiv.append(imagesArr[i])
        }
        let columnsArr = Array.from(document.getElementsByClassName('columnDiv'))
        let columnsHeight=[]
        setTimeout(()=>{
            for(let i=4;i<imagesArr.length;i++){
                columnsHeight = columnsArr.map((column) =>{
                    return (column.offsetHeight)
                })
               currentColumn = columnsArr.find((element) => element.offsetHeight===Math.min(...columnsHeight))       
                  console.log(currentColumn)
                     currentColumn.append(imagesArr[i])
             }
            console.log(columnsHeight ,"heights of columns")
        },1000)
}
building(masonry,200)
















// class Masonry{
//     constructor(columnWidth,autoResize){
//         this.columnWidth = columnWidth
//         this.autoResize = autoResize
//     }
//     render(){
//         if(this.autoResize === true){
//             window.addEventListener('resize', function(){
//                 const columnsQuantity = Math.floor(
//                     document.body.clientWidth/this.columnWidth
//                 );
//                 for(let i = 0; i < columnsQuantity; i++){
//                     let columnDiv = document.createElement('div')
//                     columnDiv.className = 'columnDiv'
//                     columnDiv.style.height = "fit content"
//                     masonry[0].prepend(columnDiv)
//                     columnDiv.prepend(imagesArr[i])
//                 }
//             }, true)
//         }
//     }
// }
// let build = new Masonry('.masonry', {
//     columnWidth: 200,
//     autoResize: true
// })