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
  .then(() => luckyDraw('Caroline'))
  .then(data => console.log(data))
  .then(() => luckyDraw('Marco'))
  .then(data => console.log(data))
  .catch(error => console.log(error))