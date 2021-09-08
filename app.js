const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");   //find loginform instead(document):loginForm이 html element이기때문에 document를 안쓰고 바로 loginForm을 써도 가능하다.
const loginBtn = loginForm.querySelector("button");

function btnClick() {
    const username = loginInput.value;
    console.log(username);
}

loginBtn.addEventListener("click", btnClick); //클릭했을때 이벤트리스너

//위에와 같은 방법으로 const loginInput = document.querySelector("#login-form input"); ,const loginBtn = document.querySelector("#login-form button"); 사용가능