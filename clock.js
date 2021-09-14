const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();  //new Date()는 현재 시간날짜 를 가져온다.
    clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);

// setTimeout(sayHello, 5000); //Interval은 5초마다 실행이된다면, setTimeout은 5초후 함수가한번실행한다