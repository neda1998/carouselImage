const rightBtn =document.querySelector('#right');
const leftBtn =document.querySelector('#left');
const imgs = document.querySelector('#imgs');
const img = document.querySelectorAll('#imgs img')

let idx = 0;

// let interval = setInterval(run,2000);

// function run() {
//     idx++;
//     changeImage();
// }

// function changeImage() {
//     if (idx > img.length -1){
//         idx = 0

//     }else if (idx < 0) {
//         idx = img.length -1

//     }
//     imgs.style.transform=`translateX(${-idx *500}px)`
// }

// function resetInterval() {
//     clearInterval(interval);
//     interval = setInterval(run,2000)
    
// }

// rightBtn.addEventListener('click',() => {
//     idx++;
//     changeImage();
//     resetInterval();
// })

// leftBtn.addEventListener('click',() => {
//     idx--;
//     changeImage();
//     resetInterval();
// })

rightBtn.addEventListener('click' , () => {
    idx++;
    if(idx > imgs.length-1){
      idx = imgs.length -1;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
})

leftBtn.addEventListener('click' , () => {
    idx--;
    if(idx < 0){
      idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
})