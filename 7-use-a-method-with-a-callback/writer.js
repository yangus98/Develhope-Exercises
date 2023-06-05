const fs = require('fs');
  
let data = {
  name: "Will",
  surname: "Smith"
};
  
fs.writeFile("person.txt", JSON.stringify(data), (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully");
    console.log("data saved!");
    console.log(fs.readFileSync("person.txt", "utf8"));
  }
});