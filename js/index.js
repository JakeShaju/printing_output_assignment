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

