
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined ){
        return []
      }
      if(matrix.length === 0){
        return []
      }
      let a = matrix.length;
      let b = matrix[1].length;
      let c = [];
    if(matrix.length === 0){
      return []
    }
      
    
      for (let i = 0; i < a;i++){
        let v = []
        for(let j = 0;j < b; j++){
          
        //   c.push(matrix[i][j])
        // c.sort( (a, b) => a - b )
        // console.log(matrix[i][j])
        
        v.push(matrix[i][j])
      }
       if(i === 1 || i === 3){
        v.sort( (a, b) => b - a );
        console.log('one')
       }else{
         v.sort( (a, b) => a - b );}
    
      for(let k = 0; k < v.length; k++){
          if(v[k]===undefined){
    
          }else{
        c.push(v[k])}
      }
    }
 return c
  }
