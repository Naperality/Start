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