var cnt = 0;
var obj = setInterval(repeatHello,1000);

function repeatHello(){
    sayHello = () => {console.log("Hello")};
    cnt++;
    if(cnt===5){
    clearInterval(obj);
    }
    return sayHello();
}

// The callback function must be an arrow function, can you also explain why?

// We use arrow function because the callback function just return "Hello" in console, and so we can reduce
// sintax. 
