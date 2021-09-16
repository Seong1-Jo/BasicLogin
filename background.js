const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg" 
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`; //img src를 만드는 코드 html에서 <img src="" />를 같게하는 코드

document.body.appendChild(bgImage);   //body를 불러오는거, appendChild는 body에 html을 추가한다(element를추가한다는말)




//여기에서는 여태까지 html에서 가져와서 자바스크립트를작성했는데, 이번에는 자바스크립트에서 작성해서 html에 넣어준다
//그리고 저기 위의 const images의 배열들의 이름과 실제 img의 이름이 같아야한다.