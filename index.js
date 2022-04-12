// function buildingMasonry(container,columnWidth){
//     let masonry = document.querySelector(container)
//     let imagesArr = Array.from(this.document.querySelectorAll('li'))
//     let columnsHeight=[]
//     const columnsQuantity = Math.floor(document.body.clientWidth/columnWidth);
//         for(let i=0; i < columnsQuantity; i++){
//             let columnDiv = document.createElement('div')
//             columnDiv.className = 'columnDiv'
//             masonry.prepend(columnDiv)
//             columnDiv.style.width = `${columnWidth}px`
//             columnDiv.style.top = `5px`
//             columnDiv.style.left = `${i*columnWidth}px`
//         }
//         let columnsArr = Array.from(document.getElementsByClassName('columnDiv'))
//         setTimeout(()=>{
//             for(let i = 0; i < imagesArr.length; i++){
//                 columnsHeight = columnsArr.map((column) =>{
//                     return column.offsetHeight
//                 })
//                currentColumn = columnsArr.find((element) => element.offsetHeight===Math.min(...columnsHeight))       
//                      currentColumn.append(imagesArr[i])
//              }
//         },500)
// }
// building(".masonry",200)


class Masonry{
    constructor(container, {columnWidth,autoResize}){
        this.container = container
        this.columnWidth = columnWidth
        this.autoResize = autoResize
    }
    debagger
    
    render(){
    window.addEventListener('resize', function(){
        let masonry = Array.from(this.document.querySelectorAll(this.container))
        console.log(masonry)
        let imagesArr = Array.from(this.document.querySelectorAll('li'))
        console.log(masonry, 'masonry')
        let columnsHeight=[]
        const columnsQuantity = Math.floor(this.document.body.clientWidth/this.columnWidth);
        console.log(columnsQuantity, 'quant')

        for(let i=0; i < columnsQuantity; i++){
            let columnDiv = document.createElement('div')
            columnDiv.className = 'columnDiv'
            masonry.prepend(columnDiv)
            columnDiv.style.width = `${this.columnWidth}px`
            columnDiv.style.top = `5px`
            columnDiv.style.left = `${i*this.columnWidth}px`
        }
        let columnsArr = Array.from(document.getElementsByClassName('columnDiv'))
        setTimeout(()=>{
            for(let i = 0; i < imagesArr.length; i++){
                columnsHeight = columnsArr.map((column) =>{
                    return column.offsetHeight
                })
            let currentColumn = columnsArr.find((element) => element.offsetHeight===Math.min(...columnsHeight))       
                    currentColumn.append(imagesArr[i])
            }
        },500)
        },true)
    }
}


let build = new Masonry('.masonry', {
    columnWidth: 200,
    autoResize: true
})
// console.log(Masonry.prototype.constructor)

console.log(build.container)
build.render()





// function building(container,columnWidth){
//     let masonry = document.querySelector(container)
//     console.log(masonry)
//     let imagesArr = Array.from(this.document.querySelectorAll('li'))
//     let columnsHeight=[]
//     const columnsQuantity = Math.floor(document.body.clientWidth/columnWidth);
//         for(let i=0; i < columnsQuantity; i++){
//             let columnDiv = document.createElement('div')
//             columnDiv.className = 'columnDiv'
//             masonry.prepend(columnDiv)
//             columnDiv.style.width = `${columnWidth}px`
//             columnDiv.style.top = `5px`
//             columnDiv.style.left = `${i*columnWidth}px`
//         }
//         let columnsArr = Array.from(document.getElementsByClassName('columnDiv'))
//         setTimeout(()=>{
//             for(let i = 0; i < imagesArr.length; i++){
//                 columnsHeight = columnsArr.map((column) =>{
//                     return column.offsetHeight
//                 })
//                currentColumn = columnsArr.find((element) => element.offsetHeight===Math.min(...columnsHeight))       
//                      currentColumn.append(imagesArr[i])
//              }
//         },500)
// }
// building(".masonry",200)