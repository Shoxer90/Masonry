
function Masonry(container,{columnWidth,autoResize}) {
    this.container = container
    this.columnWidth = columnWidth
    this.autoResize = autoResize
}

const masonryPrototype = {
    baseBuild(){
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
                minTopPosition =arrTop.indexOf(Math.min(...arrTop))
            }else{
                images[i].style.left =  `${minTopPosition*this.columnWidth}px`
                images[i].style.top =`${arrTop[minTopPosition]}px`
                arrTop[minTopPosition] = images[i].height+arrTop[minTopPosition]
                minTopPosition =arrTop.indexOf(Math.min(...arrTop))
            }
        }
    },
    render(){
        window.addEventListener('load',() => {
            this.baseBuild()
            if(this.autoResize===true){
                return window.addEventListener('resize',()=> this.baseBuild())
            }
        });
    }
}

Masonry.prototype = masonryPrototype
Masonry.prototype.constructor = Masonry

 let build = new Masonry('.masonry', {
        columnWidth:300,
        autoResize: true
    })
build.render()