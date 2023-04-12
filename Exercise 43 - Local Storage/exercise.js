const user = {
  id: 1,
  name: "John",
  age: 25,
};

function setData(item,name){
  let userSerialized = JSON.stringify(item);
  localStorage.setItem(name, userSerialized);
  }

  function getData(value){
  let userDeserialized = JSON.parse(localStorage.getItem(value));
  console.log(userDeserialized);
  }

  setData(user, "user");
  getData("user");