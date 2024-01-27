//declaration
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

//variables for animation
const animationData = [
    {
        inputVal: 5,
        marginTop: 300,
        addElDelay: 1000,
    },
    {
        inputVal: 2,
        marginTop: -200,
        addElDelay: 1500,
    },
    {
        inputVal: 1,
        marginTop: -200,
        addElDelay: 2000,
    }
];

// //function for decimal to binary
// const decimalToBinary = (input)=>{
//     //declare
//     const binary = "";
//     //0 value to show 0
//     if (input === 0) {
//         binary = "0";
//     }
//     //loop for conversion
//     while (input>0) {
//         binary = (input % 2) + binary;
//         input = Math.floor(input/2);
//     }
//     //displaying result to web
//     result.innerText = binary;
// };

//recursive function for conversion
const decimalToBinary = (input)=>{
    if (input === 0||input === 1) {
        return String(input);
    }
    else{
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
};

//show animation
const showAnimation = () =>{
    result.innerText = "Call Stack Animation";

    animationData.forEach(obj => {
        setTimeout(()=>{},obj.addElDelay);
    });
};

//function for user inputs (numbers, decimals)
const checkUserInput = ()=>{
    const inputInt = parseInt(numberInput.value);
    //this checks input value to be number integer only or empty
    if (!numberInput.value || isNaN(inputInt)) {
        alert("Please provide a decimal number");
        return;
    }
    //check user input of 5 to show animation
    if(inputInt === 5){
        showAnimation();
        return;
    }
    result.textContent =  decimalToBinary(inputInt);
    //deleting the value of previous number
    numberInput.value = "";
};

//event listener for button click submit
convertBtn.addEventListener("click", checkUserInput);

//key listener for entering automatic submit
numberInput.addEventListener("keydown",(e)=>{
    if (e.key == "Enter") {
        checkUserInput();
    }
});