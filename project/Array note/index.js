let  mainArray= [{title:"about app",text:"This app is created by Myo la min maung.↵↵version 0.1."},
]
 


// for declarations

const showRoomTag = document.querySelector("#noteShowRoom");

// for write area
const writeTag = document.querySelector(".writeArea");

// for new add button
const addTag = document.querySelector("#addButton");

// for text area exit and save button
const saveAndExitTag = document.querySelector("#saveAndExit");

// for title 

const titleTag = document.querySelector("#titleName");

// for text area
const textareaTag = document.querySelector("#textarea");

// for setting 
const settingButton = document.querySelector("#setting");

const settingDiv = document.querySelector(".settingDiv");

// for change font size

const changeFontSize = document.querySelector("#fontSize");

const getFont = localStorage.getItem("font");

// for setting div event listen


// settingDiv.addEventListener("focusin",() => {
//     settingDiv.classList.add("show");
// })


settingDiv.addEventListener("mouseleave",() => {
    settingDiv.classList.remove("show");
})

changeFontSize.value = getFont;

console.log(getFont)

settingButton.addEventListener("click",() => {
    console.log(changeFontSize.value);
    
    localStorage.setItem("font",changeFontSize.value);
    const innerNotFont = document.getElementsByTagName("textarea");
    for (let j = 0; j < innerNotFont.length; j++) {
        innerNotFont[j].style.fontSize = getFont;
        
    }
    textareaTag.style.fontSize = changeFontSize.value;
    
    // innerNotFont.classList.add("font")
    console.log();
    settingDiv.classList.toggle("show");
})



addTag.addEventListener("click",() => {
    writeTag.classList.add("show");
    textareaTag.value = "";
})

// for click textarea exit button

saveAndExitTag.addEventListener("click",() => {
    // mainArray.push({title:"note33",text:"laminis god and no one can stop"});

    title = "note";
    title = titleTag.value;
    text = "";
    text = textareaTag.value;
    console.log(textareaTag.value);
    mainArray.push({title:`${title}`,text:`${text}`});
    writeTag.classList.remove("show");
    showRoomTag.innerHTML = "";

    

    reload();

    localStorage.setItem("save",JSON.stringify(mainArray));

})





const reload = () => {
    
if (mainArray == null) {
    mainArray = [{title:"about app",text:"This app is created by Myo la min maung.↵↵version 0.1."},
]
localStorage.setItem("save",JSON.stringify(mainArray));
    // mainArray = JSON.parse(localStorage.getItem("save"));
} else {
    
}
for (let i = 0; i < mainArray.length; i++) {
    const failNote = document.createElement("div");
    const failNoteClick = document.createElement("div");
    const titleShowDiv =document.createElement("div")
    const innerNote = document.createElement("div");
    const innerNoteHead = document.createElement("div");
    const exitButton = document.createElement("button");
    const delButton = document.createElement("button");
    const innerNoteBody = document.createElement("textarea");

    // for add id
    failNote.id = "noteId" + i;

    // for add class
    failNote.classList.add("note");
    failNoteClick.classList.add("failNoteClick");
    innerNote.classList.add("innerNote");
    innerNoteHead.classList.add("innerNoteHead");
    innerNoteBody.classList.add("readerView");
    exitButton.classList.add("exitButton");
    delButton.classList.add("deleteButton")

    // for append child
    showRoomTag.append(failNote);
    failNote.append(failNoteClick,innerNote);
    failNoteClick.append(titleShowDiv)
    innerNote.append(innerNoteHead,innerNoteBody);
    innerNoteHead.append(exitButton,delButton);

    // note element
    exitButton.innerText = "exit";
    delButton.innerText = "delete";
    innerNoteBody.innerHTML =mainArray[i].text;
    titleShowDiv.innerText = mainArray[i].title;

    // for click 

    failNoteClick.addEventListener("click",(event) => {
        innerNote.classList.add("show");
    })
    
    exitButton.addEventListener("click",(event) => {
         


        innerNote.classList.remove("show");
        title = mainArray[i].title;
        textA = "";
        textA = innerNoteBody.value;
        mainArray[i] = {title:`${title}`,text:`${textA}`};
        localStorage.setItem("save",JSON.stringify(mainArray))
        reloadCall();
    })

    // for delete button
    delButton.addEventListener("click", (event) => {
        mainArray.splice(i,1);
        localStorage.setItem("save",JSON.stringify(mainArray))
        reloadCall();
        innerNote.classList.remove("show");
    })

    const innerNotFont = document.getElementsByTagName("textarea");
        for (let j = 0; j < innerNotFont.length; j++) {
            innerNotFont[j].style.fontSize = changeFontSize.value;
            
        }
    
}
}


// for relcall main array for local storage

let recall = JSON.parse(localStorage.getItem("save"));

mainArray = recall;


 
// for reload showroom
reload();

const reloadCall = () => {
    showRoomTag.innerHTML = "";
    
     reload()
}
// setInterval(() => {
    
// },1000)