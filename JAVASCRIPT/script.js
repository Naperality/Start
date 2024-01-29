//declare variables
const sortButton = document.getElementById("sort");

//function
const sortInputArray = (event) => {
    event.preventDefault();
    //get values from dropdown list
    const inputValues = [
        ...document.getElementsByClassName("values-dropdown")
    ].map((dropdown)=>Number(dropdown.value));
    //updating UI for every input chosen in dropdown list
    updateUI(inputValues);
};

//function for UI
const updateUI = (array = []) => {
    array.forEach((num,i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
};

//event listener
sortButton.addEventListener("click",sortInputArray);