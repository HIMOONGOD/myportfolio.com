const project = [
    {
        projectName : "note",
        projectURL :"project/Array note/index.html",
        projectDate:"",
        projectPhoto:"url('src/note.png')",
    },
    {
        projectName : "Coffee",
        projectURL :"project/coffeeShop/Ui1.html",
        projectDate:"",
        projectPhoto:"url('src/coffee.jpg')",
    },
    {
        projectName : "nothing",
        projectURL :"project/Formation PJ/index.html",
        projectDate:"",
        projectPhoto:"",
    }

]

console.log(project.length)

// for building card
const projectBoxTag = document.getElementById("projectRoom")

for (let index = 0; index < project.length; index++) {
    const projectCardTag = document.createElement("div");
    projectCardTag.classList.add("projectCard");
    projectCardTag.style.backgroundImage =  project[index].projectPhoto;
    projectBoxTag.append(projectCardTag);
    projectCardTag.innerText = project[index].projectName;

    // for go project

    projectCardTag.addEventListener("click",() => {
        console.log("work");
        location = project[index].projectURL;
    })
    
    
}