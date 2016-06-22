var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position){
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i < this.todos.length; i++){
      if(this.todos[i].completed){
        completedTodos ++;
      }
    }
    if(totalTodos === completedTodos){
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false
      }
    } else {
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true
      }
    }
  }
};

var handlers = {
  displayTodo: function() {
    todoList.displayTodo();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodo();
  },
  addTodo: function() {
    var todoText = document.getElementById('addTodoTextInput');
    todoList.addTodo(todoText.value);
    todoText.value = '';
    view.displayTodo();
  },
  changeTodo: function() {
    var position = document.getElementById('changeTodoPosition');
    var newText = document.getElementById('changeTodoText');
    todoList.changeTodo(position.valueAsNumber, newText.value);
    newText.value = '';
    position.value = '';
    view.displayTodo();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodo();
  },
  toggleCompleted: function(){
    var position = document.getElementById('toggleCompletedPosition');
    todoList.toggleCompleted(position.valueAsNumber);
    view.displayTodo();
  }
};

var view = {
  displayTodo: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML  = '';
    for (var i = 0; i < todoList.todos.length; i++){
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i]
      var todoTextWithCompletion = '';

      if(todo.completed){
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '() ' + todo.todoText;
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setupEventListeners: function(){
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click',function(event){
      // console.log(event.target.parentNode.id);
      var elementClicked = event.target;

      if (elementClicked.className === 'deleteButton'){
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setupEventListeners();
