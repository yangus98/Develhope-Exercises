async function getResults(player){
  try{
    const letsPlay = await new Promise(function (resolve, reject) {
    if(player === "Joe" || player === "Caroline" || player === "Sabrina") {
      async function luckyDraw(player) {
        return await new Promise((resolve, reject) => {
          const win = Boolean(Math.round(Math.random()));
      
          process.nextTick ( () => {
            if (win) {
              resolve (console.log(`${player} won a prize in the draw!`));
            }

            reject(new Error(`${player} lost the draw.`));
          
          });
        });
      }
    return resolve(luckyDraw(player))
    } else {
      return reject("Player not allowed!");
}
})
} catch(e) {
console.error(e)
}
}

getResults("Caroline")