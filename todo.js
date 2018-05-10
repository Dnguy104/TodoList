
var todoList = {
	todos: ['item1', 'item2', 'item3'],
	displayTodos: function() {
		console.log('My Todos:', this.todos);
	},
	addTodo: function(item) {
		this.todos.push(item);
		this.displayTodos();
	},
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position,1);
		this.displaysTodos();
	}
};
