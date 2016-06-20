var todoList = {
  todos: [],
  displayTodo: function(){
    console.log('My todos:',this.todos);
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
  deleteTodo: function(position, count){
    this.todos.splice(position, count);
    this.displayTodo();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodo();
  }
};


console.log(todoList.addTodo('hello'));
console.log(todoList.changeTodo(0,'goodbye'));
console.log(todoList.toggleCompleted(0));
