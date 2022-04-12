
class Masonry{
    constructor(container,{columnWidth,autoResize}){
        this.container = container
        this.columnWidth = columnWidth
        this.autoResize = autoResize
    }
    render(){
        let fixedColumnsNumber=0
        let columnsArr =""
        // if(this.autoResize === true){
            // window.addEventListener('resize', function(){
                let columnsQuantity = Math.floor(document.body?.clientWidth / this.columnWidth);
                let imagesArr = document.querySelectorAll('li')
                if(columnsQuantity===fixedColumnsNumber) return
                    for(let i=0;i<fixedColumnsNumber;i++){
                        columnsArr[i]?.replaceWith(...columnsArr[i]?.childNodes)
                    }
                    for(let i=0; i < columnsQuantity; i++){
                        let columnDiv = document.createElement('div')
                        columnDiv.className = 'columnDiv'
                        document.querySelector(this.container).prepend(columnDiv)
                        columnDiv.style.width = `${this.columnWidth}px`
                        columnDiv.style.left = `${i*this.columnWidth}px`
                    }
                fixedColumnsNumber = columnsQuantity
                    columnsArr = Array.from(document.getElementsByClassName('columnDiv'))
                for(let i = 0; i < imagesArr.length; i++){
                    let columnsHeight = columnsArr.map(column => column.offsetHeight)
                    let currentColumn = columnsArr?.find((element) => element?.offsetHeight===Math.min(...columnsHeight))       
                            currentColumn?.append(imagesArr[i])
                    }
            // })
    //    }
    }
    divMaker(){

    }

}



let build = new Masonry('.masonry', {
    columnWidth: 200,
    autoResize: true
})
build.render()
console.log( typeof build.columnWidth)
