const titolo = document.querySelector("#todo-title");
const completo = document.querySelector("#todo-completed");
const form = document.querySelector("form");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const title = titolo.value;
    const completed = completo.value;
    obj = {
        title : title,
        completed: completed,
    };
     fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        headers : {
            "content-Type": "application/json"
        },
        body: JSON.stringify(obj)
     })
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(err => console.error(err))

})

