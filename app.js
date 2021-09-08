const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");   //find loginform instead(document):loginForm이 html element이기때문에 document를 안쓰고 바로 loginForm을 써도 가능하다.


function onLoginSubmit(event) { //이곳에하는 일은 브라우저가 기본 동작을 실해하지 못하게 막아주는것뿐
    event.preventDefault(); //preventDefault함수는 이벤트에서 기본으로 하는것을 막아준다.
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit); //submit은 엔터를 누르거나 클릭할때 발생!(click,enter기능을 둘다가짐)