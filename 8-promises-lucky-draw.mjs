function checkPlayer(player) {
const letsPlay = new Promise(function (resolve, reject) {
  if(player === "Joe" || player === "Caroline" || player === "Sabrina") {
    function luckyDraw(player) {
      return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));
    
        process.nextTick(() => {
          if (win) {
            resolve(`${player} won a prize in the draw!`);
          } else {
            reject(new Error(`${player} lost the draw.`));
          }
        });
      });
    }
  return resolve(luckyDraw(player))
} else {
  return reject(new Error("player not allowed!"))
}
}).then(data => console.log(data)).catch(err => console.log(err))

}

checkPlayer("Caroline")