// comece a criar a sua função add na linha abaixo
function add(n1, n2){

    let soma = 0;
    soma = n1 + n2;
    return soma;
        
}


// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply (n1,n2){
    
    let mult = 0;
    cont = 1
    while (cont <= n1){
       mult = add(mult,n2);
       cont++

    }
    
    return mult;

}

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power (base,expoente){
    let potencia = 1
    i = 1 

    while (i <= expoente){
        potencia = multiply(base,potencia)
        i ++
        
    }
   
    return potencia
}

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(n){
    let resp = n
    for (let i = 1; i < n; i++){
        resp = multiply(resp, (n-[i]))
    }
    return resp

}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
