// let thubnil = document.getElementsByClassName('thumbnail');

// let activeImg = document.getElementsByClassName('active');

// for (var i = 0; i < thubnil.length; i++) {
//     thubnil[i].addEventListener('mouseover', ()=>{
//         document.getElementById('main-photo').src = this.src
//     })
    
// }


// let arrowLeft = document.getElementById('slideLeft');
// arrowLeft.addEventListener('click', ()=>{
//     document.getElementById('slider').scrollLeft -= 80
// })

// let arrowRight = document.getElementById('slideRight');
// arrowRight.addEventListener('click', ()=>{
//     document.getElementById('slider').scrollLeft += 80
// })

let thumbnail = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnail.length; i++){

  thumbnail[i].addEventListener('mouseover', function(){
    //console.log(activeImages)

    document.getElementById('main-photo').src = this.src
  })
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft -= 80
})

buttonRight.addEventListener('click', function(){
  document.getElementById('slider').scrollLeft += 80
})