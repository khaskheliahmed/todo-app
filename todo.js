var div = document.querySelector("div")


var input = document.querySelector("#todo");
var list = document.querySelector("ol")

var todoArray = [];



function renderTodo()


{
    list. innerHTML = ""
    for(var i = 0; i < todoArray.length; i++)
    list. innerHTML +=
    `<li>${todoArray[i]}
          <button onclick="deleteTodo(${i})">Delete</button>
          <button onclick="editTodo(${i})">Edit</button>
    </li>`

          

}

function addNumbers(){
    todoArray.push(input.value)
     console.log(todoArray);  
      renderTodo()
    input.value = ""

}

function deleteTodo(index){

    console.log(" todo delete " , index)
    todoArray.splice(index , 1);
    console.log(todoArray);
    renderTodo()
}


function editTodo(index){

    var updateValue = +prompt("Enter value");
    todoArray.splice(index , 1 ,  updateValue);
    console.log(todoArray);
    
    renderTodo()



}