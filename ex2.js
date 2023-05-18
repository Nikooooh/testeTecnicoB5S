function mediaSimples(array){
  if (array.length < 3) {
    return false
  }
  var soma = 0
  for(var i=0;i<array.length;i++){
  soma+=array[i]
  }
  return soma / array.length  
}


