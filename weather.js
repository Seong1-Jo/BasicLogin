function onGeoOk(position){ //getCurrentPosition에 javascript object를 사용할수있다.코드보고 이해하기!!안되면 동영상참조
    const lat = position.coords.latitude; //위도
    const lng = position.coords.longitude; //경도
    console.log("You live it", lat, lng );
}
function onGeoError(){
    alert("Can't  find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // GPS,WIFI등등 브라우저에서사용할수있는함수,이함수는 두가지 함수를 넣어야한다, 처음에는 성공했을때 함수, 두번째는 에러했을때 함수