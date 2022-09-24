//Variables declaration and definition
const myForm= document.querySelector('#task-form');
const inputTask=document.querySelector('#task');
const Filter= document.querySelector('#filter');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-task');

//declare all events
loadEventListeners();


function loadEventListeners(){
//declare all event
//Add task
    myForm.addEventListener('submit',addTask);
//Remove task
    taskList.addEventListener('click',deleteTask);
//Clear task
    clearBtn.addEventListener('click',clearAll);
//Filter task
    Filter.addEventListener('keyup',filterTask);
}
//Add task
function addTask(e){
    if(inputTask.value===''){
        alert('Enter a task!');
    }
    //Create list items
    const Li=document.createElement('li');
    //add classname
    Li.className='collection-item';
    //create text node
    Li.appendChild(document.createTextNode(inputTask.value));
    //create a tag
    const link=document.createElement('a');
    //add class name
    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>';
    Li.appendChild(link);
    //append list to parent
    {
        taskList.appendChild(Li);
    //clear task
        inputTask.value='';
    }
    e.preventDefault();
}

//Remove task

function deleteTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
       e.target.parentElement.parentElement.remove();
}
}
//Clear task
function clearAll(e){
    // taskList.innerHTML='';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}
//Filter tasks
function filterTask(e){
    const text=e.target.value.toLowerCase();
    list=document.querySelectorAll('.collection-item');
    list.forEach((task)=>{
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){

            task.style.display='block';

        }else{
            task.style.display='none';
        }
    })
    
}
 

