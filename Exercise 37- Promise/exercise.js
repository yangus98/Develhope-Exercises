const number = 15;
function filterNumber(number){
    return new Promise((resolve,reject)=> {
        if (number > 10) {
            resolve ("Resolve!")
        } else {
            reject ("Reject!")
        }
    })
}

filterNumber(number).then(ris => console.log(ris)).catch(err => console.log(err))