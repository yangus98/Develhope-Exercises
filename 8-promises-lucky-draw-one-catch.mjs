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
  
  luckyDraw('joe')
  .then((result) => {
      console.log(result)
      return luckyDraw('Carolina')
  })
  .then((result2) => {
      console.log(result2)
      return luckyDraw('Sabrina')
  })
  .then((result3) => {
      console.log(result3)
      
  })
  .catch((error) => {
      console.log(error)
  })