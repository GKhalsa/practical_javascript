var todoList = {
  todos: [],
  displayTodo: function(){
    if(this.todos.length === 0){
      console.log('Your todo list is empty');
    } else {
      console.log('My todos:');
      for (var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log('(x)',this.todos[i].todoText);
        } else {
          console.log('()',this.todos[i].todoText)
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodo();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodo();
  },
  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodo();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodo();
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
    this.displayTodo();
  }
};

var handlers = {
  displayTodo: function() {
    todoList.displayTodo();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function() {
    var todoText = document.getElementById('addTodoTextInput');
    todoList.addTodo(todoText.value);
    todoText.value = '';
  },
  changeTodo: function() {
    var position = document.getElementById('changeTodoPosition');
    var newText = document.getElementById('changeTodoText');
    todoList.changeTodo(position.valueAsNumber, newText.value);
    newText.value = '';
    position.value = '';
  },
  deleteTodo: function() {
    var position = document.getElementById('deleteTodoPosition');
    todoList.deleteTodo(position.valueAsNumber);
  },
  toggleCompleted: function(){
    var position = document.getElementById('toggleCompletedPosition');
    todoList.toggleCompleted(position.valueAsNumber);
  }
}
