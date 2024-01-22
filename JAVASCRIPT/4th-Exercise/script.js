const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");
//constructor of date using new
const date = new Date();
//date constructor predefined functions
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
//formatting dates
const formattedDate = `${day}`;