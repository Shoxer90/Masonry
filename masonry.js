class Masonry{
    constructor(container,{columnWidth,autoResize}){
        this.container = container
        this.columnWidth = columnWidth
        this.autoResize = autoResize
    }
    divMaker(){
        let columnsArr =[]
        let columnsQuantity = Math.floor(document.body?.clientWidth / this.columnWidth);
        let imagesArr = document.querySelectorAll('li')
        if(columnsQuantity === columnsArr.length) return
            for(let i=0;i< columnsArr.length;i++){
                columnsArr[i]?.replaceWith(...columnsArr[i]?.childNodes)
            }
        for(let i=0; i < columnsQuantity; i++){
            let columnDiv = document.createElement('div')
            columnDiv.className = 'columnDiv'
            document.querySelector(this.container).prepend(columnDiv)
            columnDiv.style.width = `${this.columnWidth}px`
            columnDiv.style.left = `${i*this.columnWidth}px`
            columnsArr.push(columnDiv)
        }
        for(let i = 0; i < imagesArr.length; i++){
            let columnsHeight = columnsArr.map(column => column.offsetHeight)
            let currentColumn = columnsArr?.find((element) => element?.offsetHeight === Math.min(...columnsHeight))       
            currentColumn?.append(imagesArr[i])
        }
    }
    render(){
        window.addEventListener('load',() => {
            this.divMaker()
            if(this.autoResize === true){
                window.addEventListener('resize', this.divMaker.bind(this))
            }
        });
        
    }
}
let build = new Masonry('.masonry', {
    columnWidth: 200,
    autoResize: true
})
build.render()
