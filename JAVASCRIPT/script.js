//declare 
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton= document.getElementById("check-message-btn");

//regex to catch
const helpRegex = /please help|assist me/i;
//dollar - "()" capture , "|" or, "[]" get all, "?" optional
//"?:" non capturing group but can still match 
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
//strings- "[e3]" means e and 3 to match, "\s" looks for spaces or line breaks, 
//"^" means beginning of string, "$" means end of string
const freeRegex = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/i;
//stock alert 
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
//dear friend
const dearRegex = /dear friend/i;

//arrays of  regex
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex,dearRegex];

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


