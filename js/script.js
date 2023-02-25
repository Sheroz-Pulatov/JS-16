
let numberOfPerson = prompt('Назовите число !');
let numUser = [0,1];


for (let i = 2; i <= numberOfPerson; i++) {
    numUser[i] = numUser[i - 2] + numUser[i - 1];
}

console.log(numUser);