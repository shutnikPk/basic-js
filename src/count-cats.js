module.exports = function countCats( matrix ) {
  let counter=0;
  if(matrix==undefined||matrix.length==0){
    return counter;
  }else
  {
    for(let i = 0; i < matrix.length; i++){
      while (matrix[i].indexOf('^^')!=-1){
        matrix[i][matrix[i].indexOf('^^')]=null;
        counter++;
      }
    }return counter;
  }

};
