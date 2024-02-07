//declare 
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton= document.getElementById("check-message-btn");

//event listener
checkMessageButton.addEventListener("click",()=>{
    if (messageInput.value === "") {
        alert("Please enter a message.");
        return;
    }
});

//is spam function
const isSpam = (msg) => false;