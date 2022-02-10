//Lev1_4//
const A = 'Susi is going to codingschool';
let one = A.slice(0, 4);
console.log(one);
document.write(one + "<br>");

let is = A.slice(5, 8);
console.log(is);
document.write(is + "<br>");

let going = A.slice(5, 16);
console.log(going);

let school = A.slice(23, 30);
console.log(school);
document.write(school + "<br>");

let five = `${one} ${is}${school}`;
console.log(five);
document.write(five + "<br>");

let four = `${going} ${school}`;
console.log(four);
document.write(four + "<br>");