//declare 
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton= document.getElementById("check-message-btn");

//regex to catch
const helpRegex = /please help|assist me/i;
//dollar 
const dollarRegex = /[0-9]+ hundred|thousand|million|billion dollars/i;

//arrays of  regex
const denyList = [helpRegex,dollarRegex];

//is spam function
const isSpam = (msg) => helpRegex.test(msg);

//event listener
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});


