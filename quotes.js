const quotes = [
    {
        quote : "1ABC",
        author : "1Awsome",
    },
    {
        quote : "2ABC",
        author : "2Awsome",
    },
    {
        quote : "3ABC",
        author : "3Awsome",
    },
    {
        quote : "4ABC",
        author : "4Awsome",
    },
    {
        quote : "5ABC",
        author : "5Awsome",
    },
    {
        quote : "6ABC",
        author : "6Awsome",
    },
    {
        quote : "7ABC",
        author : "7Awsome",
    },
    {
        quote : "8ABC",
        author : "8Awsome",
    },
    {
        quote : "9ABC",
        author : "9Awsome",
    },
    {
        quote : "10ABC",
        author : "10Awsome",
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )]; //랜덤으로 quotes 의 Array를 랜덤으로하는 함수

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//Math.random(); 은 기본적으로 있는 함수로 0부터 1사이에 랜덤으로 출력한다.
//소수점을 없애주는 함수는 3가지가있다. 1.Math.round():반올림을해주는함수  2.Math.ceil():반올림을해주는개념이지만, 소수점이 무조건 반올림을 해준다 예)1.1 = 2로 3.Math.floor():은 ceil의 반대개념으로 소수점이 그냥 반올림하지않고 없앤다.