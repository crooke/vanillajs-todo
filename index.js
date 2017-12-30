(function(){
  'use strict';

  var app = {
    items: [
            {name: 'Haircut'},
            {name: 'Change oil'},
            {name: 'Read book'}
           ],
    input: document.getElementById('todoInput'),
    btnAdd: document.getElementById('btnAdd'),
    template: document.querySelector('.list-item-template')
  }


  // ***************************************************************************
  // *                       UI Component Event Listeners                      *
  // ***************************************************************************
  app.input.addEventListener('input', function (e) {
    if (e.target.value) {
      app.btnAdd.disabled = false;
    } else {
      app.btnAdd.disabled = true;
    }
  });

  app.btnAdd.addEventListener('click', function (e) {
    console.log('Add button clicked');
    var todoName = app.input.value;
    console.log(todoName);
    app.addNewItem({name: todoName});
  });

  function deleteTodo(event) {
    var li = event.target.parentElement;
    var todoName = li.textContent;
    console.log('Removing: ', todoName);
    //app.items.remove(app.items.find(todoName));
    li.remove();
  };

  // ***************************************************************************
  // *                     Methods to update/refresh the UI                    *
  // ***************************************************************************

  // Updates the list of todos
  app.addListItem = function (item) {
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
  // *                     Methods for dealing with the model                  *
  // ***************************************************************************

  app.addNewItem = function(item) {
    app.items.push(item);
    console.log(app.items);
    app.addListItem(item);
  };


})();