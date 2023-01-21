const htmlDiv = document.getElementById("html");
const cssDiv = document.getElementById("css");
const jsDiv = document.getElementById("javascript");

const C1Div = document.querySelector(".C1");
const C2Div = document.querySelector(".C2");
const C3Div = document.querySelector(".C3");

cssDiv.addEventListener("click",() => {
    C3Div.classList.add("noneDisplay");
    C2Div.classList.remove("noneDisplay");
    C1Div.classList.add("noneDisplay")
});

htmlDiv.addEventListener("click",() => {
    C3Div.classList.add("noneDisplay");
    C2Div.classList.add("noneDisplay");
    C1Div.classList.remove("noneDisplay")
});

jsDiv.addEventListener("click",() => {
    C2Div.classList.add("noneDisplay");
    C1Div.classList.add("noneDisplay");
    C3Div.classList.remove("noneDisplay")
});

