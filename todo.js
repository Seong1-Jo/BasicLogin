const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");//일반적으로 document.querySelector("#todo-form input")과 같다
const toDoList = document.getElementById("todo-list");

const toDos = []; //1. 저장할 Array를 만든다

function saveToDos() { //3. 함수를 만들어준다, 한가지 일만하는것은 toDos Array의 내용을 localStorage에 넣는다
    localStorage.setItem("todos", JSON.stringify(toDos)); //5.저장된값들을 배열로 만들어주기위해 먼저JSON.stringify를해주면, 저장된값들이 String로 바뀐다.
}

function deleteToDo(event) {
    const li = event.target.parentElement; //event.target.parentElement은 버튼의 부모(li)를 li변수에 담는다.parentElement는 앞의 코드의 부모를 찾아주는거다.
    li.remove();//삭제하는 코드함수

    // console.log(event.target); //하면, 안에 내용들을 보여주는데, 그중에 path를 보면 버튼의 순서를 볼수있다, 그리고 target
    // console.dir(event.target); //console.log 다음 해야할순서 , 많은 것중 parentNode,element를 찾자.=이유는 부모가누구인지 알수있다.
    // console.dir(event.target.parentElement.innerText);//여기에서 누구누구인지 찾을수 있다. innerText를 해주자 중요!!
}


function paintToDo(newTodo) { //toDo를 그리는 역할 함수
    const toLi = document.createElement("li"); //element생성
    const toSpan = document.createElement("span");
    toSpan.innerText = newTodo;
    const toBtn = document.createElement("button"); 
    toBtn.innerText = "X";
    toBtn.addEventListener("click", deleteToDo); //이곳에 이벤트리스너를 입력 
    toLi.appendChild(toSpan); //li자식으로span append는 맨마지막에 놓여져있어야한다,이순서 지키기 
    toLi.appendChild(toBtn); //li > button
    toDoList.appendChild(toLi); //ul자식으로 li
    
}



function handleToDoSubmit(event) { //text를 넣고 enter치면 일어나는 함수
    event.preventDefault();
    const newToDo = toDoInput.value; //리셋되기전에 todoinput값을  변수 newToDo저장해둔다.
    toDoInput.value = ""; //submit인 enter을 치면 toDoInput.value값이 ""으로 바뀐다. 하지만 변수newToDo에는 값이 남아있다.

    toDos.push(newToDo); // 2.newToDo를 그리기 전에 푸시해서 배열에넣어준다,localStorage에는 배열을 담을수없다, 오직 텍스트만 담을수 있다.
    paintToDo(newToDo);  //지금함수(handleToDoSubmit)가 paintToDo함수를 사용하는 코드
    saveToDos(); //4.위에 그려주고 함수를 호출

}

todoForm.addEventListener("submit", handleToDoSubmit);