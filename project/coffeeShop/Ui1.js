// for hesd menu div

const homeTag = document.getElementById("home");
const menuTag = document.getElementById("menu");
const orderTag = document.getElementById("order");

// using jquery for displaying menu


$(document).ready(function(){
    $("#menu").click(function(){
      $("#me").toggle();
    });

    $("#exit").click(() => {
        $("#me").toggle();
    })

  });

// menuTag.addEventListener("click",() => {
//     console.log("work")
//     $(".menuDiv").toggle();
//     console.log("not")
// })


