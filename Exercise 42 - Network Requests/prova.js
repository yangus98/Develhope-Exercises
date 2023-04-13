const titolo = document.querySelector("#todo-title");
const completo = document.querySelector("#todo-completed");
const form = document.querySelector("form");

form.addEventListener("submit", async (event) =>{
    event.preventDefault();
    const title = titolo.value;
    const completed = completo.checked;
    obj = {
        title : title,
        checked: completed,
    };

     try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method : "POST",
            headers : {
                "content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error(error);
        
    }

})