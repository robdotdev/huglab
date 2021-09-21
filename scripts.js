// let p = document.getElementById('button');
// let img = document.getElementById('a');
// // $('.button').click(function () {
// //   $('.a').addClass('active');
// // });

// p.addEventListener('click', () => {
//   img.classList.add('active');
// });

// $(document).ready(function () {
//   let myBtn = document.querySelector('.button');

//   myBtn.addEventListener('click', () => {
//     console.log('test');
//   });
// });
console.log('asdas');

// let btn = document.getElementsByClassName('button');
// btn.addEventListener('click', () => {
//   console.log('ewe');
// });

let btn = document.querySelector('button');
let img = document.querySelector('img');
btn.addEventListener('click', () => {
  img.classList.add('active');
  btn.classList.add('remove');
  setTimeout(function () {
    img.classList.remove('active');
    btn.classList.remove('remove');
  }, 7000);
});
