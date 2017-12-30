(function(){
  'use strict';

  var app = {
    model: {
      todos: [
        { id: 0, desc: 'Haircut' },
        { id: 1, desc: 'Change oil' },
        { id: 2, desc: 'Read book' }
      ]
    },

    view: {
      todoInput: document.getElementById('todoInput'),
      btnAddTodo: document.getElementById('btnAdd'),
      todoTemplate: document.querySelector('.list-item-template')
    }
  };


  // ***************************************************************************
  // *                    UI Component Event Listeners                         *
  // ***************************************************************************
  app.view.todoInput.addEventListener('input', function (e) {
    if (e.target.value) {
      app.view.btnAddTodo.disabled = false;
    } else {
      app.view.btnAddTodo.disabled = true;
    }
  });

  app.view.btnAddTodo.addEventListener('click', function (e) {
    e.preventDefault();
    var desc = app.view.todoInput.value;
    app.addTodo(desc);
  });

  function btnDeleteTodo(event) {
    var li = event.target.parentElement;
    var id = app.view.getTodoId(li);
    app.deleteTodo(id);
  }


  // ***************************************************************************
  // *                       App (Controller) Methods                          *
  // ***************************************************************************
  app.addTodo = function (desc) {
    var todo = app.model.addTodo(desc);
    app.view.addTodo(todo);
    console.log('Todos model now looks like: '
      + JSON.stringify(app.model.todos, null, ' '));
  };

  app.deleteTodo = function (id) {
    app.model.deleteTodo(id);
    app.view.deleteTodo(id);
    console.log('Todos model now looks like: '
      + JSON.stringify(app.model.todos, null, ' '));
  };

  // ***************************************************************************
  // *                            Model Methods                                *
  // ***************************************************************************

  app.model.addTodo = function (desc) {
    var id = getHighestIndex(app.model.todos) + 1;
    var todo = { id: id, desc: desc };
    app.model.todos.push(todo);
    return todo;
  };

  app.model.deleteTodo = function (id) {
    app.model.todos = app.model.todos.filter(function (todo) {
      return todo.id != id;
    });
  };


  // ***************************************************************************
  // *                            View Methods                                 *
  // ***************************************************************************

  app.view.addTodo = function (todo) {
    var li = app.view.todoTemplate.cloneNode(true);
    li.classList.remove('list-item-template');
    li.removeAttribute('hidden');
    li.id = 'todo-' + todo.id;
    li.querySelector('.delete').onclick = btnDeleteTodo;
    var todoNode = document.createTextNode(todo.desc);
    li.appendChild(todoNode);
    document.getElementById('list').appendChild(li);
    // Reset the input and add button
    app.view.todoInput.value = '';
    app.view.btnAddTodo.disabled = true;
  };

  app.view.deleteTodo = function (id) {
    id = 'todo-' + id;
    var todo = document.getElementById(id);
    todo.remove();
  };

  app.view.getTodoId = function (listNode) {
    var idList = listNode.id.split('-');
    return idList[idList.length - 1];
  };


  // ***************************************************************************
  // *                            Helper Methods                                *
  // ***************************************************************************

  function getHighestIndex(todos) {
    var highestIndex = -1;
    todos.forEach(function (todo) {
      if (todo.id > highestIndex) {
        highestIndex = todo.id;
      };
    });
    return highestIndex;
  }

})();