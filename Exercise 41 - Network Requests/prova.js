async function fetcher(){
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await result.json();
    
  data.forEach(item => {
    const todoList = document.createElement("h2");
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    if (item.completed == true) {
      checkbox.checked = true;
    }

    todoList.innerText = item.title;
    document.querySelector("#container").appendChild(todoList);
    document.querySelector("#container").appendChild(checkbox);
    
  });
  };
  
fetcher(); 