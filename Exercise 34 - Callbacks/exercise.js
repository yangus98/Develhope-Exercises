function printAsyncName(name, message){
    let callback = () => console.log(message);
    setTimeout(callback, 1000);
    return setTimeout(() =>{console.log(name)}, 2000);
}

printAsyncName("Luca","Hello");

//oppure

//function printAsyncName(name, callback){
//    setTimeout(callback, 1000);
//    return setTimeout(() =>{console.log(name)}, 2000);
//}

//printAsyncName("Luca",() => console.log("Hello"))
