const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");//일반적으로 document.querySelector("#todo-form input")과 같다
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; //밑에localStorage에 이름값을 중복으로 사용하기때문에 위에서 변수를 정해준다.

let toDos = []; //1. 저장할 Array를 만든다 //12.문제가 생긴다 항상 시작할때마다, 빈배열로 시작하기 때문에 const에서 let으로 바꾸어준다 : 새로고침(업데이트)가 되면 기존값의 새로운값이 덮어버리는 문제때문에 기존값과 새로운값이 같이존재하기위해, 먼저 const에서 let으로 바꿔서 업데이트가 가능하도록 만든다

function saveToDos() { //3. 함수를 만들어준다, 한가지 일만하는것은 toDos Array의 내용을 localStorage에 넣는다
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //5.저장된값들을 배열로 만들어주기위해 먼저JSON.stringify를해주면, 저장된값들이 String로 바뀐다.
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
    toLi.id = newTodo.id; //20.id를 주는이유가 여기에 있다. web에 element에 ul il 을 확인
    const toSpan = document.createElement("span");
    toSpan.innerText = newTodo.text; //19.object(객체)를 받아오기때문에 인자.text를하면 받아온객체안에 text(프로퍼티)를 불어올수있다.
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
    const newTodoObj = {//15.14내용다음인곳, 객체를 만들곳
        text:newToDo, // text는 값들을 넣을것이고,
        id: Date.now(), //id는랜덤으로 넣을것이다. //id를 왜넣을걸까?!이유는 id로 각각의 Li item을 구별하기위해,이것을이용해 게시판제목을id를줄수있다
    } 
        toDos.push(newTodoObj);//16.15번에 newTodoObj를 toDos(데이터베이스넣을곳) Array(배열)에 넣을예정
    // toDos.push(newToDo); // 2.newToDo를 그리기 전에 푸시해서 배열에넣어준다,localStorage에는 배열을 담을수없다, 오직 텍스트만 담을수 있다.//14.데이터베이스에 To Do내용을 추가하는곳!(text를 object(객체)로 만들어서 push할예정)

        paintToDo(newTodoObj);//18.17번 object를 담는다.
    // paintToDo(newToDo);  //지금함수(handleToDoSubmit)가 paintToDo함수를 사용하는 코드//17.화면에출력할 함수에text가아닌 object를 줄예정
    saveToDos(); //4.위에 그려주고 함수를 호출

}

todoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) { //10.번주석(자바스크립트는 기본적으로 아이템이라는 인자를 줄수있다.)
//     console.log("This is the turn of", item);
// }

const savedToDos =  localStorage.getItem(TODOS_KEY);//6.앞에서greeting과 같이 진행할예정


if(savedToDos !== null) { //7. 만약 savedToDos가 localStorage에 존재하면 , savedToDos === savedToDos !== null
    const parsedToDos = JSON.parse(savedToDos); //8.localStorage에있는 string값을 살아있는 javascript object로 변하게하는거(궁금하면 console.log확인!)
    toDos = parsedToDos //13.localstorage에 값을 유지하면서 새로운값을 추가하기위해,toDos(빈배열)에 parsedToDos(저장한값)을 넣어서 전에있던 값을 복원(const였다면 넣을수 없지만, let을 이용하므로서, 값을 바꿀수있기때문에)
    parsedToDos.forEach(paintToDo); //11.이제 함수paintToDo를 이용하여 화면에지운값을 새로고침을해도 저장된값을 화면에 남아있게해주는거

    // parsedToDos.forEach((item) => {console.log("This is the turn of", item)}); //9.parsedToDos는 parse로인해 Array라서 forEach라는 것을 갖고있다. forEach는 Array의 각item(배열에담겨져있는값들)에 대해 function을 실해해준다.위의예를 보면이해도움(10번주석)
    // //예방법으로는 parsedToDos.forEach(sayHello);(이경우는 위의 주석함수이용) === parsedToDos.forEach((item) => {console.log("This is the turn of", item)});
}