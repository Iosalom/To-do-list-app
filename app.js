'use strict';

// This code listens to whole document
document.addEventListener('DOMContentLoaded', function () {
  // *** For me edge case to check if input is completly empty was way too hard, so I didn't implemented this functionality
  const fieldInput = document.querySelector('.field-input');
  const addBtn = document.querySelector('.add-btn');
  const main_ul = document.querySelector('.main--ul');
  const removeAllBtn = document.getElementById('remove-all-btn');

  // AND this listens only 'ENTER' key on keyboard for ADDING task
  fieldInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addBtn.click();
    }
  });

  addBtn.addEventListener('click', function () {
    function userTask() {
      // ** At this moment it is way to challenging for me to implement functionallity for each task to be selected and then be deleted or marked as done.
      // ** So I just left them HARDER to delete ALL or mark ALL completed tasks at the same time.
      // Functionality for listening keypress on upper case 'D' key and Shift and Ctrl key for DELETION of ALL tasks
      fieldInput.addEventListener('keydown', function (event) {
        if (event.key === 'D' && event.shiftKey && event.ctrlKey) {
          event.preventDefault();
          btnDelete.click();
        }
      });

      // Functionality for listening keypress on upper case 'C' key and shift and Ctrl key for COMPLATION of ALL task
      fieldInput.addEventListener('keydown', function (event) {
        if (event.key === 'C' && event.shiftKey && event.ctrlKey) {
          event.preventDefault();
          btnDone.click();
        }
      });

      // Creating HTML elements
      let li = document.createElement('li');
      let btnDelete = document.createElement('button');
      let btnDone = document.createElement('button');
      let div = document.createElement('div');

      // adding class names to created HTML elements
      li.className = 'li';
      btnDone.className = 'btn-done';
      btnDelete.className = 'btn-delete';
      div.className = 'li-div';

      // Where input value goes
      div.appendChild(document.createTextNode(fieldInput.value));
      // Where input value and is located
      li.appendChild(div);
      // Where DeleteBtn and doneBtn are with input value
      li.appendChild(btnDone);
      li.appendChild(btnDelete);
      // li is attached to ul
      main_ul.appendChild(li);

      // 2nd part
      function taskDone() {
        div.classList.toggle('cross-all-li');
      }
      function taskDelete() {
        div.className = 'hidden-all-li';
        li.className = 'hidden-all-li';
        btnDelete.className = 'hidden-all-li';
        btnDone.className = 'hidden-all-li';
      }
      // Deletes only selected task
      btnDelete.addEventListener('click', function () {
        taskDelete();
      });
      // Completes/crosses only selected task
      let locVarDone = true;
      if (locVarDone == true) {
        btnDone.addEventListener('click', function () {
          taskDone();
        });
        // Ir task is completed new DIV will be generated
        locVarDone = false;
      } else if (locVarDone == false) {
        btnDone.addEventListener('click', function () {
          div.className('li-div');
        });
      }
      // Removes all existing tasks
      removeAllBtn.addEventListener('click', function () {
        taskDelete();
      });
    }

    // I was not able to connect ENTER key to button :C
    // If input is EMPTY do execute this code
    if (fieldInput.value == '') {
      // Changes placeholder value
      let emptyValueCase = (document.getElementsByName('empty-value-case')[0].placeholder =
        'Field is empty!');
      // If input CONTAINS a string EXECUTE this code
    } else if (fieldInput.value !== '') {
      userTask();
      // Nullifies entered strings in input field
      fieldInput.value = '';
      // Changes placeholder value
      let emptyValueCase = (document.getElementsByName('empty-value-case')[0].placeholder =
        'Enter more tasks!');
    }
  });
});
