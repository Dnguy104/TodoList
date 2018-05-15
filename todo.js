
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
		
		for(var i = 0; i < this.todos.length; i++) {
			if(this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		
		if(completedTodos === totalTodos) {
			for(var i = 0; i < this.todos.length; i++) {
				this.todos[i].completed = false;
			}
		} else {
			for(var i = 0; i < this.todos.length; i++) {
				this.todos[i].completed = true;
			}
		}
		
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
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    
    for(var i=0; i<todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var text = '';
      
      if(todo.completed === true) {
        text = '(x) ' + todo.todoText;
      } else {
        text = '( ) ' + todo.todoText;
      }
      
      todoLi.id = i;
      todoLi.textContent = text;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
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

view.setUpEventListeners();

 
 
 
 
