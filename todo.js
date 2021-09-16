const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");//일반적으로 document.querySelector("#todo-form input")과 같다
const toDoList = document.getElementById("todo-list");


function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; //리셋되기전에 todoinput값을  변수 newToDo저장해둔다.
    toDoInput.value = ""; //submit인 enter을 치면 toDoInput.value값이 ""으로 바뀐다. 하지만 변수newToDo에는 값이 남아있다.

}

todoForm.addEventListener("submit", handleToDoSubmit);