//declaration
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
//variables for animation
const animationData = [
    {
        msg:'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
        showMsgDelay: 15000,
        removeElDelay:20000,
        inputVal: 5,
        marginTop: 300,
        addElDelay: 1000,
    },
    {
        msg:'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 10000,
        removeElDelay:15000,
        inputVal: 2,
        marginTop: -200,
        addElDelay: 1500,
    },
    {
        msg:'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 5000,
        removeElDelay:10000,
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
    //array reading of animation data or delays
    animationData.forEach(obj => {
        //using the data to show in html
        setTimeout(()=>{
            animationContainer.innerHTML += `
                <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px" class="animation-frame">
                    decimalToBinary(${obj.inputVal})
                </p>
                `;
        },obj.addElDelay);
        //paragraph element 
        setTimeout(()=>{
            document.getElementById(obj.inputVal).textContent = obj.msg;
        },obj.showMsgDelay);
        //removing elements
        setTimeout(()=>{
            document.getElementById(obj.inputVal).remove();
        },obj.removeElDelay);
    });
    //show the result of conversion on num 5
    setTimeout(()=>{
        result.textContent = decimalToBinary(5);
    },20000);
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