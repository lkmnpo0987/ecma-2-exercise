let arr = [[1,2,3],[4,5,6,7],[7,8,9,10],[11,98,45,76,456,43]];

let output = arr.reduce((acc,cur)=>{
    return acc.concat(cur);

},[]) ;
console.log("Array is ",output)