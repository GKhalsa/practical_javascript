var todoList = {
  todos: ['task1', 'task2', 'task3'],
  displayTodo: function(){
    console.log('My todos:',this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodo();
  },
  changeTodo: function(position, newTodo){
    this.todos[position] = newTodo;
    this.displayTodo();
  },
  deleteTodo: function(position, count){
    this.todos.splice(position, count);
    this.displayTodo();
  }
};


console.log(todoList.deleteTodo(0,1));
