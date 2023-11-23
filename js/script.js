// Script for making accordion
let accordion = document.querySelectorAll('.faq_body_row');
// console.log(accordion);
let open_accordion = document.querySelectorAll('.faq_body_row_header');
for (let i = 0; i < accordion.length; i++) {
   open_accordion[i].addEventListener('click', function () {
      accordion[i].classList.toggle('open')
   })
}


// Script for making header responsive
let icon = document.querySelector('.fa-solid');
let header = document.querySelector('header');
let body = document.querySelector('body');
icon.addEventListener('click', function () {
   if (header.classList.contains('show')) {
      body.style = 'overflow: scroll;'
   }
   else {
      body.style = 'overflow: hidden;'
   }
   header.classList.toggle('show')
   console.log(body);
})