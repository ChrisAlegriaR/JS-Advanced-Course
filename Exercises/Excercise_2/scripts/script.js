const text = "amazon prepares future software developers";

let conteo = {};

const separate = text.split(" ");

separate.forEach(element => {
    let value = separate.filter(x => x == element);
    if(element == value){
        conteo[element];
        conteo[element] = 1;
    } else {
        conteo[element]++;
    }

    console.log(value)
    
});
console.log(conteo)