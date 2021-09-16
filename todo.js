const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");//일반적으로 document.querySelector("#todo-form input")과 같다
const toDoList = document.getElementById("todo-list");




function paintToDo(newTodo) { //toDo를 그리는 역할 함수
    const toLi = document.createElement("li");
    const toSpan = document.createElement("span");
    toLi.appendChild(toSpan); //li자식으로span
    toSpan.innerText = newTodo;
    toDoList.appendChild(toLi); //ul자식으로 li
    
}



function handleToDoSubmit(event) { //text를 넣고 enter치면 일어나는 함수
    event.preventDefault();
    const newToDo = toDoInput.value; //리셋되기전에 todoinput값을  변수 newToDo저장해둔다.
    toDoInput.value = ""; //submit인 enter을 치면 toDoInput.value값이 ""으로 바뀐다. 하지만 변수newToDo에는 값이 남아있다.

    paintToDo(newToDo);  //지금함수(handleToDoSubmit)가 paintToDo함수를 사용하는 코드

}

todoForm.addEventListener("submit", handleToDoSubmit);