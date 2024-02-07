//declare 
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton= document.getElementById("check-message-btn");

//regex to catch
const helpRegex = /please help/; 

//event listener
checkMessageButton.addEventListener("click",()=>{
    if (messageInput.value === "") {
        alert("Please enter a message.");
        return;
    }
    result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});

//is spam function
const isSpam = (msg) => false;