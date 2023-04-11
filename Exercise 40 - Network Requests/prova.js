async function fetcher(){
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await result.json();
    
  data.forEach(item => {
    const todoList = document.createElement("li");
    todoList.innerText = item.title;
    document.querySelector("ul").appendChild(todoList);                   
  });
  };
  
fetcher();  