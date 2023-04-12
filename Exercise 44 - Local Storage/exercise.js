const John = {
  id: 1,
  name: "John",
  age: 25,
};

const Rosy = {
  id: 2,
  name: "Rosy",
  age: 20,
};

const Giuseppe = {
  id: 3,
  name: "Giuseppe",
  age: 24,
};

function setData(item,name){
  let userSerialized = JSON.stringify(item);
  localStorage.setItem(name, userSerialized);
  }

  function getData(value){
  let userDeserialized = JSON.parse(localStorage.getItem(value));
  console.log(userDeserialized);
  }

  setData(John, "primo");
  setData(Rosy, "secondo");
  setData(Giuseppe, "terzo");
  getData("primo");