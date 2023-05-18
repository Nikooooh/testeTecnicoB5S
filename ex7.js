function primeiroValorNaoRepetido (array){
    for(var i=0;i<array.length;i++){
        if (array[i] != array[i + 1]){
            return array[i]
        }
    }
}