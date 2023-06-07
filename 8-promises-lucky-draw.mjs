function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    
      const win = Boolean(Math.round(Math.random()));

      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(`${player} lost the draw.`);
        }
  });
 })
}

luckyDraw('Joe')
.then(data => console.log(data))
.catch(error => console.log(error))
.then(() => luckyDraw('Caroline'))
.then(data => console.log(data))
.catch(error => console.log(error))
.then(() => luckyDraw('Marco'))
.then(data => console.log(data))
.catch(error => console.log(error))

//Promise.allSettled([
//  luckyDraw("Joe"),
//  luckyDraw("Caroline"),
//  luckyDraw("Sabrina")
//])
//  .then((results) => {
    
//    results.forEach((result) => {
//      if (result.status === "fulfilled") {
//        console.log(result.value);
//      } else {
//        console.log(result.reason);
//      }
//    });
//  })
//  .catch((error) => {
//    console.log(`Error: ${error}`);
//  });
//
