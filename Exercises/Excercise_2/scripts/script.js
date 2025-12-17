process.stdin.on("data", (data) => {
    const input = String(data);
    input.trim();
    input.toLocaleLowerCase;
    
    let arrayFrase = input.split(' ');
    let counter = {};

    arrayFrase.forEach(element => {
        if(element.length > 3){
            if(counter[element]){
                counter[element]++;
            }else{
                counter[element] = 1;
            }            
        }
    });

    // console.log(counter)
    // console.log(`La palabra que mas se repite es: `, counter.hola )
});
