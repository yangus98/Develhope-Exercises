function printAsyncName(name, callback){
    setTimeout(callback, 1000);
    return setTimeout(() =>{console.log(name)}, 2000);
}

printAsyncName("Luca",() => console.log("Hello"))
