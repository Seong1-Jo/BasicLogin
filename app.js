const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");   //find loginform instead(document):loginForm이 html element이기때문에 document를 안쓰고 바로 loginForm을 써도 가능하다.
const greeting = document.querySelector("#greeting");

const HIDE_GET = "hidden"; //대문자로 사용하는것은 string일때 중요하지않은것으로 관습?!

const LOCALNAME_KEY = "username";

function onLoginSubmit(event) { //이곳에하는 일은 브라우저가 기본 동작을 실해하지 못하게 막아주는것뿐
    event.preventDefault(); //preventDefault함수는 이벤트에서 기본으로 하는것을 막아준다.
    const username = loginInput.value;
    localStorage.setItem(LOCALNAME_KEY, username); //Small DB
    loginForm.classList.add(HIDE_GET);
    // greeting.innerText = `Hello ${username}`;
    // greeting.classList.remove(HIDE_GET);
    paintGreetings(username);
}

function paintGreetings(user) {
    greeting.innerText = `Hello ${user}`;
    greeting.classList.remove(HIDE_GET); //show the greeting
} //위함수와 아래 if문에 겹치는 코드가 있어서 함수로 묶어준다.


const savedUser = localStorage.getItem(LOCALNAME_KEY);


if(savedUser === null) {
    loginForm.classList.remove(HIDE_GET);//show the form
    loginForm.addEventListener("submit", onLoginSubmit); 
}else {
    paintGreetings(savedUser);
    // greeting.innerText = `Hello ${savedUser}`;
    // greeting.classList.remove(HIDE_GET); //show the greeting
   
}