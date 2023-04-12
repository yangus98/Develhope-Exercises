const user = {
  id: 1,
  name: "John",
  age: 25,
};

function setData(item,name){
  let userSerialized = JSON.stringify(item);
  localStorage.setItem(name, userSerialized);
  }

  setData(user, "user");