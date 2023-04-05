function repeatHello(callback) {
    let repeat = setInterval(callback, 1000);
    setTimeout(() => clearInterval(repeat), 5000);
}

repeatHello(() => console.log("Hello"));

// The callback function must be an arrow function, can you also explain why?

// We use arrow function because the callback function just return "Hello" in console, and so we can reduce
// sintax. 
