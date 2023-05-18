function parOuImpar(array){
    var soma = 0
    for(var i=0;i<array.length;i++){
        if (array[i] <= 0){
            console.log("Os números do array precisam ser maior do que zero!")
        }
        if (array[i] % 2 === 0) {
            soma += 1
        }
    }
    return soma
}
