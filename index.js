let masonry = document.getElementsByClassName("masonry")
let imagesArr = Array.from(this.document.querySelectorAll('li'))
function building(masonry,columnWidth){
    const columnsQuantity = Math.floor(document.body.clientWidth/columnWidth);
        for(let i = 0; i < columnsQuantity; i++){
            let columnDiv = document.createElement('div')
            columnDiv.className = 'columnDiv'
            columnDiv.style.height = "fit content"
            masonry[0].prepend(columnDiv)
            console.log(document.getElementsByClassName('columnDiv')[0], "nthColumnDiv")
            // columnDiv.prepend(imagesArr[i])
        }
        let columnsArr = Array.from(document.getElementsByClassName('columnDiv'))
        console.log(columnsArr)
        // let j=0   
            for(let j=0;j<imagesArr.length;j++){
                for(let i=0;i<columnsArr.length;i++){
                    columnsArr[i].prepend(imagesArr[j])
                }
                j=j+columnsQuantity
            }
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