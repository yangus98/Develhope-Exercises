//function printAsyncName(name, sayHello){
//    function sayHello(){
//        return console.log("Hello")
//   }
    
//    setTimeout(sayHello, 1000);
//    return setTimeout(() =>{console.log(name)}, 2000);
    
//    }
    
//   printAsyncName("Luca");  

function printAsyncName(name, callback){
    setTimeout(callback, 1000);
    return setTimeout(() =>{console.log(name)}, 2000);
}

printAsyncName("Luca",() => console.log("Hello"))