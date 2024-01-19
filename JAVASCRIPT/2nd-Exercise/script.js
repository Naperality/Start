const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

function cleanInputString(str){
    //regex method fast
    const regex = /[+-\s]/g;//finds the invalid characters like + - and whitespace 'g' means globally or continous
      return(str.replace(regex,""));
    // const strArray = str.split('');
    // const cleanStrArray = [];
    // for (let i = 0; i < strArray.length; i++) {
    //     if (!["+", "-", " "].includes(strArray[i])) {
    //         cleanStrArray.push(strArray[i]);
    //     }
    // }
}
function isInvalidInput(str){
    const regex = /\d+e\d+/i;//finds exponential forms in html input 'i' stand for case-insensitive
  return(str.match(regex));
}
function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);//template literal with dollar sign and object sign
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length+1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">
    `;
    //putting codes to html in here javascript
    //innerHTML - directly affecting the html just use +=
    //insertAdjacentHTML - adding html it is a method (where, what)
    targetInputContainer.insertAdjacentHTML("beforeend",HTMLString); 
}
addEntryButton.addEventListener("click",addEntry);

function getCaloriesFromInputs(list){
    let calories=0;
    for (let i = 0; i < list.length; i++) {
        const currVal = cleanInputString(list[i].value);
        const invalidInputMatch = isInvalidInput(currVal);
        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
        }
    }
}