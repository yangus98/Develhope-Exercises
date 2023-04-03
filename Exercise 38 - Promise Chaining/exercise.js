const isLogged = true;

function randomNumber(isLogged){
    return new Promise((resolve,reject)=> {
        if (isLogged = true) {
            resolve (Math.random());
        } else {
            reject ("Reject!")
        }
    })
}

function whoAreU(num){
    return new Promise((resolve,reject)=> {
        if (num > 0.5) {
            resolve (`{name: "John", age: 24}`)
        } else {
            reject ("error")
        }
    })
}

randomNumber(isLogged)
.then (response =>{console.log(whoAreU(response))})
.catch (e =>{console.log(e)})

