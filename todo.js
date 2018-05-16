
var todoList = {
	todos: [],
	addTodo: function(textText) {
		this.todos.push({
			todoText: textText,
			completed: false
		});
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
	},
	deleteTodo: function(position) {
		this.todos.splice(position,1);
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		
		this.todos.forEach(function(todo) {
	      if(todo.completed === true) {
	        completedTodos++;  
	      }
	    });
	    
	    this.todos.forEach(function(todo) {
	      if(completedTodos === totalTodos) {
	         todo.completed = false; 
	      } else {
	        todo.completed = true;
	      }
	      
	    });
		
 	}
};


 var handlers = {
	addTodo: function() {
	  var addTodoText = document.getElementById('addTodoTextInput');
	  todoList.addTodo(addTodoText.value);
	  addTodoText.value = '';
	  view.displayTodos();
	},
	changeTodo: function() {
	  var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
	  var changeTodoTextInput = document.getElementById('changeTodoTextInput');
	  todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
	  changeTodoPositionInput.value = '';
	  changeTodoTextInput.value = '';
	  view.displayTodos();
	},
	deleteTodo: function(position) {
	  todoList.deleteTodo(position);
	  view.displayTodos();
	},
	toggleCompleted: function() {
	  var toggleCompletedInput = document.getElementById('toggleCompletedInput');
	  todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
	  toggleCompletedInput.value = '';
	  view.displayTodos();
	},
		toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
	}
 };

var view = {
	initializedTodos: function() {
		var localS  = localStorage.getItem('todos');
		if(localS) {
			 todoList.todos = JSON.parse(localStorage.getItem('todos'));
			 console.log(todoList.todos);
		}
		localStorage.setItem('todos',JSON.stringify(todoList.todos));
		this.displayTodos();
			
	},
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    localStorage.setItem('todos',JSON.stringify(todoList.todos));
    console.log(JSON.stringify(todoList.todos));
    console.log(todoList.todos);
    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement('li');
      var text = '';
      if(todo.completed === true) {
        text = '(x) ' + todo.todoText;
      } else {
        text = '( ) ' + todo.todoText;
      }
      
      
      todoLi.id = position;
      todoLi.textContent = text;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
    
    
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
  
    //setup eventlisteners for the delete buttons
    todosUl.addEventListener('click', function() {
      var elementClicked = event.target;
      if(elementClicked.className === 'deleteButton') {
          handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
    
  }
};
view.initializedTodos();
view.setUpEventListeners();

 
 
 
 
