const myMap = new Map();
const key1 =  "myStr",key2 = {},key3 = function(){};
myMap.set(key1,'This is a string') ;
myMap.set(key2,{value:'This is a object',type:"object"}) ;
myMap.set(key3,function(a,b){return a+b}) ;
console.log(myMap);
// myMap.delete(key1);
//getting the value 
let value = myMap.get(key1);
console.log(value);

for(let [key,value] of myMap){
    console.log(key,value);
}
for(let key of myMap.keys()){
    console.log(key);
}
for(let value of myMap.values()){
    console.log(value)
}


//using foreach

myMap.forEach(function(value,key){
    console.log("key and value is ", key, "and",value)
})

// converting map to array

let Arr = Array.from(myMap);
console.log(Arr);
let keys = Array.from(myMap.keys());
console.log(keys);
let values = Array.from(myMap.values());
console.log(values);



//set..........................
//set stores unique value
const mySet = new Set();
//adding value;
mySet.add("this");
mySet.add("Myname");
mySet.add("this");
mySet.add("Mynameis");
mySet.add("that");
mySet.add("My");
console.log(mySet)

const Set2 = new Set([1,45,'this',false,{a:4,b:8}]);
console.log(Set2);

// mySet.delete("this")


//iterating a set;
for(let item of mySet){
    console.log(item);
}
// mySet.forEach(function(item){
//     console.log(item)
//})
let A = Array.from(mySet);
console.log(A)














