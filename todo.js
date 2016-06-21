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


// console.log(todoList.displayTodo());
console.log(todoList.addTodo('hello'));
console.log(todoList.toggleCompleted(0));
// console.log(todoList.addTodo('goodbye'));
// console.log(todoList.changeTodo(0,'goodbye'));
