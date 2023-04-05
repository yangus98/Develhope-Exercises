function repeatHello(callback) {
    setInterval(callback, 1000);
}

repeatHello(() => console.log("Hello"));

//The callback function must be an arrow function,
//can you also explain why?

//It's preferable to use an arrow function when we're 
//using functions with no input parameters or that they
//have few operations inside.