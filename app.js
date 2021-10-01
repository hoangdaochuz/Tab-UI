var tabs = document.querySelectorAll('.tab-item')
var panes = document.querySelectorAll('.tab-pane')

var tabActive = document.querySelector('.tab-item.active')
var line =document.querySelector('.tabs .line')
line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

tabs.forEach((tab,index) => {
    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px'
    tab.onclick = function(){
        pane = panes[index]
        document.querySelector('.tab-item.active').classList.remove('active')
        document.querySelector('.tab-pane.active').classList.remove('active')
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px' 
        this.classList.add('active')
        pane.classList.add('active')
    }
});

// Cach KHONG su dung Set trong JS

// var array = ['a','b','c','d','e','f','d','e','b','c','d','f','g','h','i']

// function get(array) {
//     var bool = []
//     for(var i=0;i<array.length;i++) {
//         bool[array[i]] = false;
//     }
//     return array.filter((element,index)=>{
//         if(bool[element]!=true){
//             bool[element] = true;
//             return element
//         }
        
//     })
// }

// console.log(get(array))

// // Su dung Set trong JS
// var output = [...(new Set(array))]
// console.log(output)