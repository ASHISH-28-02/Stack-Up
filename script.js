document.addEventListener('DOMContentLoaded', function () {
    const todos = [];
    const todoList = document.getElementById('todos');
    const todoInput = document.getElementById('todoInput');
    const todoForm = document.querySelector('form');

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${todo.text}</span>
                <button data-id="${todo.id}" class="update-btn">Update</button>
                <button data-id="${todo.id}" class="delete-btn">Delete</button>
            `;
            todoList.appendChild(li);
        });
    }

    function addTodo() {
        const newTodo = {
            id: todos.length + 1,
            text: todoInput.value,
            completed: false,
        };
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }

    function updateTodo(todoId) {
        const updatedText = prompt('Update task:', '');
        if (updatedText !== null) {
            const todoIndex = todos.findIndex(todo => todo.id === todoId);
            if (todoIndex !== -1) {
                todos[todoIndex].text = updatedText;
                renderTodos();
            }
        }
    }

    function deleteTodo(todoId) {
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        if (todoIndex !== -1) {
            todos.splice(todoIndex, 1);
            renderTodos();
        }
    }

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo();
    });

    todoList.addEventListener('click', function (event) {
        const target = event.target;
        const todoId = parseInt(target.getAttribute('data-id'));

        if (target.classList.contains('update-btn')) {
            updateTodo(todoId);
        } else if (target.classList.contains('delete-btn')) {
            deleteTodo(todoId);
        }
    });

    renderTodos();
});

        }
    });

    renderTodos();
});
