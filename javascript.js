
// For auto Typing

try {
  const TextArray = ["Myo Lamin Maung", "Newbie Coder","Beginner web designer"];
  const AutoTag = document.querySelector(".autoType");
  AutoTag.innerHTML = TextArray[0];
  let i = 1;
  setInterval(() => { 
    if (i < 3) {
       AutoTag.innerHTML = TextArray[i];
       i++;
    } else {
      
      i = 0;
    }
   
  },3000);
} catch (error) {
  console.log("err");
}

// for contact button

const ContactTag = document.querySelector(".contactButton");

// ContactTag.addEventListener("click",() => {
  
// })

//with jquery

$("#moon").hide(3000);

setInterval(() => {
  $("#moon").toggle(3000)
},4000)
