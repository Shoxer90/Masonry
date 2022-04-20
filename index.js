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
    };
};

Masonry.prototype.render = function() { 
    if(window.innerWidth<this.columnWidth) return;
    let masonry = document.querySelector(this.container);
    let images = masonry.querySelectorAll('img');
    let arrTop = [];
    for(let i = 0; i < window.innerWidth/this.columnWidth - 1; i ++){
        arrTop.push(0);
    };
    for(let j = 0; j < images.length; j ++){ 
        let minArgument = arrTop[0];
        for(let i = 0; i < arrTop.length; i ++){
            if(arrTop[i] < minArgument) minArgument = arrTop[i];
        };
        minTopPosition = arrTop.indexOf(minArgument);
        images[j].style.width = this.columnWidth + 'px';
        images[j].style.top = arrTop[minTopPosition] + 'px';
        images[j].style.left = minTopPosition * this.columnWidth + 'px';
        arrTop[minTopPosition] += images[j].height;
    };
    masonry.style.paddingBottom =  (sortArray (arrTop)).pop() + 'px' , '0px';

};

let build = new Masonry('.m1', {
    columnWidth:200,
    autoResize: false
});

build.render();

let build2 = new Masonry('.m2', {
    columnWidth:100,
    autoResize: false
});

build2.render();

let build3 = new Masonry('.m3', {
    columnWidth:200,
    autoResize: true
});
build3.render()

let arr = [7,6,5,1445,21,152,0,6,4,2,1];
function sortArray (arr) {
    var min = arr[0];
    for(var i = 0; i < arr.length - 1; i++) {
    var min = arr[i];

        var index = 0;
        var temp = 0;
        for( var j =  i + 1; j < arr.length; ++j) {
            if(min > arr[j]){
                min = arr[j];
                index = j;
            };
        };
        temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
    };
 return arr;
};    

console.log(sortArray(arr));

