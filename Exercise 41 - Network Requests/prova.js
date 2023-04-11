async function fetcher(){
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/4");
  const dataJson = await data.json();
  h2 = document.querySelector("h2");
  h2.innerText = dataJson.title;
  
  if (dataJson.completed == true) {
    document.getElementById("checkbox").checked = true
  }
};

fetcher();