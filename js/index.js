let a = 3;
let b = 5;
let c;

let output = `
a = ${a}
b = ${b}
c = ${c}
-------------
a + b = ${a + b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}

a += b => ${a += b}
a -= b => ${a -= b}
a *= b => ${a *= b}
a /= b => ${a /= b}
a %= b => ${a %= b}

a == b => ${a == b}
a != b => ${a != b}
a > b => ${a > b}
a < b => ${a < b}

!a && !c => ${!a && !c}
!a || !c => ${!a || !c}
`

console.log(output);

let first_name="Jake";
let last_name="Shaju";
let email="jakeshaju@gmail.com";

let result= `My name is ${first_name} ${last_name}. You can contact me at ${email}.`; 
console.log(result);

