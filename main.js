// console.log(6);
// console.log('Добро '+'пожаловать '+'на курс ' + 'Денис');
// // alert('15.05.2024')
// document.getElementById('one').innerHTML = 'Hello world2'
// console.log(typeof 1);
// console.log(typeof 'cat');
// console.log(typeof 100n);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);


let btn = document.querySelector('.btn')
let inputIn = document.querySelector('.inp')
let div = document.querySelector('.ourr')

btn.onclick = function(){
let e = inputIn.value

if (e > 100) {
    console.log(e);
} else {
    div.innerHTML += `<li>${e}</li>`
}

}