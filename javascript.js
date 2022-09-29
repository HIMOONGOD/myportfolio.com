
const startball = setTimeout(() => {
  document.querySelector(".moon").classList.add("moon2");
},1000)

setTimeout(() => {
    document.querySelector(".moon").classList.remove("moon2");
  },10000)

setInterval(( ) => {
    setTimeout(() => {
        document.querySelector(".moon").classList.add("moon2");
      },1000)
      setTimeout(() => {
          document.querySelector(".moon").classList.remove("moon2");
        },  10000)
},14000)