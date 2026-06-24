function fatorial(n){

if(n ==1){

    return 1

}else{
    return n * fatorial(n-1)
}

}

console.log(fatorial(5))



//Funcao recursiva, a funcao chama ela mesma