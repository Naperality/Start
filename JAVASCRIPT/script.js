const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

//task data array for local storage
const taskData = [];
let currentTask = {};

//funcitons for event listeners
const addOrUpdateTask=()=>{
    //array index 
    const dataArrIndex = taskData.findIndex((item)=>item.id===currentTask.id);
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: titleInput.value,
        date:dateInput.value,
        description:descriptionInput.value,
    };
    //changing data or updating
    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    }
    updateTaskContainer();
    reset();
};
const updateTaskContainer = () =>{
    tasksContainer.innerHTML = "";
    //make data for the front
    taskData.forEach(({id,title,date,description}) => {
        tasksContainer.innerHTML +=`
            <div class="task" id="${id}">
                <p><strong>Title:</strong>${title}</p>
                <p><strong>Date:</strong>${date}</p>
                <p><strong>Description:</strong>${description}</p>
                <button onclick = "editTask(this)" type="button" class="btn">Edit</button>
                <button onclick = "deleteTask(this)" type="button" class="btn">Delete</button>            
            </div>
        `;
    });
};
const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item)=>item.id===buttonEl.parentElement.id);
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex,1);
};
const editTask = (buttonEl) => {
    
};

//funciton for clearing data after every entry
const reset = ()=>{
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
};

//event listeners
openTaskFormBtn.addEventListener("click", ()=>taskForm.classList.toggle("hidden"));
closeTaskFormBtn.addEventListener("click",()=>{
    const formInputsContainValues=titleInput.value || dateInput.value || descriptionInput.value;
    if (formInputsContainValues) {
        confirmCloseDialog.showModal();
    }else{
        reset();
    }
});
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
discardBtn.addEventListener("click",()=>{
    confirmCloseDialog.close();  
    reset();
});
taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    //appear data for the front
    addOrUpdateTask();
});