const str = "Hello";
let reversed = "";
let i = str.length - 1;

do {
    reversed += str[i];
    i--;
} while (i >= 0);

console.log(reversed);