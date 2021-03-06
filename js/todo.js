
function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    document.getElementById('task').value = "";
    return false;
}


function myEventHandler(e){
    var keyCode = e.keyCode;
    if(keyCode == 13){
        console.log("You pressed W!");
        alert("You pressed W!");
    }
};

function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li class="remove" id="' + i  + '">' + todos[i] + '</li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    $("#task").focus();
    return false;
}

show();
$(document).ready(function() {
 $('#task').keypress(function(event) {

if (event.which == 13){
  add();
 
    }
    });
});
