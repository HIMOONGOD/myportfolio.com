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
    console.log(mainArray);
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
    innerNoteBody.classList.add("readerView");

    // for append child
    showRoomTag.append(failNote);
    failNote.append(failNoteClick,innerNote);
    innerNote.append(innerNoteHead,innerNoteBody);
    innerNoteHead.append(exitButton,delButton);

    // note element
    exitButton.innerText = "exit";
    delButton.innerText = "delete";
    innerNoteBody.innerHTML =mainArray[i].text;
    failNoteClick.innerText = mainArray[i].title;

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
        console.log(mainArray.length)
        
         mainArray.splice(i,1);

        localStorage.setItem("save",JSON.stringify(mainArray))
        reloadCall();
        innerNote.classList.remove("show");
        console.log(mainArray)
    })

    
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