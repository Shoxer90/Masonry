function Masonry(container,{columnWidth,autoResize}) {
    this.container = container
    this.columnWidth = columnWidth
    this.autoResize = autoResize
}
Masonry.prototype.render = function() { 
    window.addEventListener( 'load' ,() => {
        let baseFunc = ()=>{
            if(window.innerWidth < this.columnWidth)return
            let masonry = document.querySelector(this.container)
            masonry.style.position = `relative`
            let images =Array.from(masonry.querySelectorAll('img'))
            let arrTop = []
            let minTopPosition = 0
            for(let i = 0 ; i<images.length; i++) {
                images[i].style.width = `${this.columnWidth}px`
                images[i].style.position = `absolute`
                images[i].style.top = `0px`
                if( i*this.columnWidth + this.columnWidth < window.innerWidth ) {
                    images[i].style.left = `${i*this.columnWidth}px`
                    arrTop.push(images[i].offsetTop+(images[i].height))
                }else{
                    images[i].style.left =  `${minTopPosition*this.columnWidth}px`
                    images[i].style.top =`${arrTop[minTopPosition]}px`
                    arrTop[minTopPosition] = images[i].height+arrTop[minTopPosition]
                }
                minTopPosition = arrTop.indexOf(Math.min(...arrTop))
            }
        }
       if(this.autoResize === true) {
       window.addEventListener( 'resize' ,() => {
            return baseFunc()
       })
        }
          return baseFunc()
    })
}

 let build = new Masonry('.masonry', {
        columnWidth:200,
        autoResize: true
    })
build.render()