async function getResults(){
  try{
    async function luckyDraw(player) {
        const win = Boolean(Math.round(Math.random()));
        if (win) {
          return `${player} won a prize in the draw!`;
        } else {
          throw `${player} lost the draw.`;
        }
      }

    async function runLuckyDraw() {
      try {
        const results = await Promise.allSettled([
          luckyDraw("Tina"),
          luckyDraw("Jorge"),
          luckyDraw("Julien"),
        ]);
        results.forEach((result) => {
          if (result.status === "fulfilled") {
            console.log(result.value);
          } else {
            console.log(result.reason);
          }
        });
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    
    runLuckyDraw()
  }catch(error){
    throw error;
  }
}

getResults()
