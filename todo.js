
var todoList = {
	todos: [],
	displayTodos: function() {
		console.log('My Todos:', this.todos);
	},
	addTodo: function(textText) {
		this.todos.push({
			todoText: textText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position,1);
		this.displaysTodos();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();	
	}
};
