//declare range array using funciton
const range = (start, end) => Array(end - start + 1).fill(start).map((element,index)=>element+index);

//getting char in array range
const charRange = (start,end) => range(start,end);

//windows upload 
window.onload = () => {
    const container = document.getElementById("container");
    const createLabel = (name) =>{
        const label = document.createElement("div");
        label.className = "label";
        label.textContent = name;
        container.appendChild(label);
    }
};