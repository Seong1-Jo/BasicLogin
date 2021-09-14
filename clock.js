const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();  //new Date()는 현재 시간날짜 를 가져온다.q
    const hours = String(date.getHours()).padStart(2, "0"); //문자열로 바꾸어서 padStart함수를 이용하여, 2개문자를 만들고 앞에 0문자를 추가한다
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours} : ${minutes} : ${second}`;
}

getClock();
setInterval(getClock, 1000);

// setTimeout(sayHello, 5000); //Interval은 5초마다 실행이된다면, setTimeout은 5초후 함수가한번실행한다