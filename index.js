function Masonry(container,{columnWidth,autoResize}) {
    this.container = container
    this.columnWidth = columnWidth
    this.autoResize = autoResize
    window.addEventListener( 'load' ,() => {
        return  this.render();
  });
    if(autoResize) {
        window.addEventListener( 'resize' ,() => {
             return this.render();
       });
    }
}

Masonry.prototype.render = function() { 
    let masonry = document.querySelector(this.container)
    let images = masonry.querySelectorAll('img');
    let arrTop = [0]
    let minTopPosition = 0
    for(let j=0 ;j<images.length; j++){
        if(j<window.innerWidth/this.columnWidth - 1){
            arrTop[j] = 0
        }
        minTopPosition = arrTop.indexOf(Math.min(...arrTop))
        images[j].style.width = `${this.columnWidth}px`;
        images[j].style.top= arrTop[minTopPosition]+'px'
        images[j].style.left= minTopPosition*this.columnWidth+'px'
        arrTop[minTopPosition]+=images[j].height
    }
}
 let build = new Masonry('.masonry', {
        columnWidth:200,
        autoResize: true
    })
build.render()