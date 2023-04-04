const isLogged = true;

function randomNumber(isLogged){
    return new Promise((resolve,reject)=> {
        if (isLogged == true) {
            rand = Math.random();
            resolve (rand);
        } else {
            reject (new Error("Button is turned OFF!!!"))
        }
    })
}

function whoAreU(num){
    return new Promise((resolve,reject)=> {
        if (num > 0.5) {
            resolve (`{name: "John", age: 24}`)
        } else {
            reject (new Error("Random number is under 0.5"))
        }
    })
}

randomNumber(isLogged)
.then (response =>{console.log(whoAreU(response))})
.catch (e =>{console.log(e)})
.finally (()=>{console.log("Operation Complete!")})

