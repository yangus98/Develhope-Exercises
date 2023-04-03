function repeatHello(sayHello){
    sayHello = () => {console.log("Hello")}
    return setInterval(sayHello, 1000);
}

repeatHello()

//The callback function must be an arrow function,
//can you also explain why?

//It's preferable to use an arrow function when we're 
//using functions with no input parameters or that they
//have few operations inside.