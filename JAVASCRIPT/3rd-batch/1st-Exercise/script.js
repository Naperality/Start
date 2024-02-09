//declare variables
const sortButton = document.getElementById("sort");

//function
const sortInputArray = (event) => {
    event.preventDefault();
    //get values from dropdown list
    const inputValues = [
        ...document.getElementsByClassName("values-dropdown")
    ].map((dropdown)=>Number(dropdown.value));
    //sorted array in bubble sort algo use bubbleSort() or selectionSort() or insertionSort()
    const sortedValues = inputValues.sort((a,b)=>a-b);
    //updating UI for every input chosen in dropdown list
    updateUI(sortedValues);
};

//function for UI
const updateUI = (array = []) => {
    array.forEach((num,i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
};

//sorting algorithm (Bubble Sort)
const bubbleSort = (array)=>{
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1; j++) { 
            if (array[j]>array[j+1]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }           
        }
    }
    return array;
};

//sorting algorithm (Selection Sort)
const selectionSort = (array) =>{
    for (let i = 0; i < array.length; i++) {
        //index for swapping
        let minIndex = i;
        //loop for swwapping in selection
        for (let j = i + 1; j < array.length; j++) {
            if (array[j]<array[minIndex]) {
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i]  = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
};

//console.log(array,array[j],array[minIndex]);
//sorting algorithm (insertion sort)
const insertionSort = (array) => {
    for(let i = 1; i < array.length; i++){
        const currValue = array[i]; let j = i - 1;   
        while(j>=0 && array[j]>currValue){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = currValue;
    }
    return array;
};

//event listener
sortButton.addEventListener("click",sortInputArray);