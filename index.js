let container=document.querySelector("#container");
let container1=document.querySelector("#container1");

const display=()=>{
    console.log('display modal');
    container.classList.add("active");
    container1.classList.add("overlayactive");
}
const closess=()=>{
    console.log("close modal");
    container.classList.remove("active");
    container1.classList.remove("overlayactive");
    
}



// const display=()=>{
//     console.log('display modal');
// container.classList.add("active");
// container1.classList.add("overlayactive");
// }



// const closess=()=>{
//     console.log("close modal");
//     container.classList.remove("active");
//     container1.classList.remove("overlayactive");
    
// }
