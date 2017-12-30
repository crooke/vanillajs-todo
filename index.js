(function(){
  'use strict';

  var app = {
    model: {
      todos: [
        { id: 0, desc: 'Haircut' },
        { id: 1, desc: 'Change oil' },
        { id: 2, desc: 'Read book' }
      ],
      addTodo: function (desc) {
        console.log('TODO: Implement adding a new todo');
      }
    },

    view: {
      todoInput: document.getElementById('todoInput'),
      btnAddTodo: document.getElementById('btnAdd'),
      todoTemplate: document.querySelector('.list-item-template')
    }
  }


  // ***************************************************************************
  // *                       UI Component Event Listeners                      *
  // ***************************************************************************
  app.view.todoInput.addEventListener('input', function (e) {
    if (e.target.value) {
      app.btnAdd.disabled = false;
    } else {
      app.btnAdd.disabled = true;
    }
  });

  view.btnAddTodo.addEventListener('click', function (e) {
    var desc = app.view.todoInput.value;
    app.addTodo(desc);
  });

  // function deleteTodo(event) {
  //   var li = event.target.parentElement;
  //   var todoName = li.textContent;
  //   console.log('Removing: ', todoName);
  //   //app.items.remove(app.items.find(todoName));
  //   li.remove();
  // };


  // ***************************************************************************
  // *                       App (Controller) Methods                          *
  // ***************************************************************************
  app.addTodo = function (desc) {
    var todo = app.model.addTodo(desc);
    app.view.addTodo(todo);
  }

  app.deleteTodo = function (id) {
    app.model.deleteTodo(id);
    app.view.deleteTodo(id);
  }


  // ***************************************************************************
  // *                            View Methods                                 *
  // ***************************************************************************

  // Updates the list of todos
  app.view.addTodo = function (todo) {
    var li = app.template.cloneNode(true);
    li.classList.remove('list-item-template');
    li.removeAttribute('hidden');
    li.querySelector('.delete').onclick = deleteTodo;
    var itemNode = document.createTextNode(item.name);
    li.appendChild(itemNode);
    document.getElementById('list').appendChild(li);

    // Reset the input and add button
    app.input.value = '';
    app.btnAdd.disabled = true;
  }

  // ***************************************************************************
  // *                            Model Methods                                *
  // ***************************************************************************

  app.model.addTodo = function(desc) {
    id = getHighestIndex(app.model.todos);
    todo = {id: id, desc: desc};
    app.model.todos.push(todo);
    console.log('Added new todo to the model:', todo);
    return todo;
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