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
    const targetId = '#' + entryDropdown.value;
    const targetInputContainer = document.querySelector(`${targetId} .input-container`);//template literal with dollar sign and object sign
}