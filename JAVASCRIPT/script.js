const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

//function for decimal to binary
const decimalToBinary = (input)=>{
    //declare arrays 
    const inputs = [];
    const quotients = [];
    const remainders = [];
    //checking if value is 0 to convert ir to decimal
    if(input === 0){
        result.innerText = "0";
        return;
    }
    //while loop for putting inputs, quotient, and remainders
    while (input>0) {
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;

        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
    }
    //cheking results
    console.log("Inputs: ",inputs);
    console.log("Quotients: ",quotients);
    console.log("Remainders: ",remainders); //opposite values of binary
    //correcting and showing on webpage
    const binaryNumber = remainders.reverse().join("");
    result.innerText = binaryNumber;
};

//function for user inputs (numbers, decimals)
const checkUserInput = ()=>{
    //this checks input value to be number integer only or empty
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
        alert("Please provide a decimal number");
        return;
    }
    decimalToBinary(parseInt(numberInput.value));
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