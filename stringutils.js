// create branch feature/ string-utils
// creating string.js
// add capitalize, reverse, trim functions
// merge late

function capitalize(name){
    console.log(name.toUpperCase())
}
capitalize("javascript")

function reverse(str){
    return str.split('').reverse().join('')
}
console.log(reverse("Hello World!"));

function trimFunc(str){
    console.log(str.trim())
}
trimFunc("hello                 ")

console.log('wrong console...')
