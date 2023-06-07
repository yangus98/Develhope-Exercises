async function getResults() {
  async function luckyDraw(player) {
    try {
      const result = await new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));
        process.nextTick(() => {
          if (win) {
            resolve(`${player} won a prize in the draw!`);
          } else {
            reject(`${player} lost the draw.`);
          }
        });
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async function runLuckyDraw() {
    try {
      const result1 = await luckyDraw("Joe");
      console.log(result1);
      const result2 = await luckyDraw("Caroline");
      console.log(result2);
      const result3 = await luckyDraw("Marco");
      console.log(result3);
    } catch (error) {
      console.log(error);
    }
  }

  runLuckyDraw();

  //try{
  //  async function luckyDraw(player) {
  //      const win = Boolean(Math.round(Math.random()));
  //      if (win) {
  //        return `${player} won a prize in the draw!`;
  //      } else {
  //        throw `${player} lost the draw.`;
  //      }
  //    }

  //  async function runLuckyDraw() {
  //    try {
  //      const results = await Promise.allSettled([
  //        luckyDraw("Tina"),
  //        luckyDraw("Jorge"),
  //        luckyDraw("Julien"),
  //      ]);
  //      results.forEach((result) => {
  //        if (result.status === "fulfilled") {
  //          console.log(result.value);
  //        } else {
  //          console.log(result.reason);
  //        }
  //      });
  //    } catch (error) {
  //      console.log(`Error: ${error}`);
  //    }
  //  }

  //  runLuckyDraw()
  //}catch(error){
  //  throw error;
  //}
}

getResults();
