window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please add a task.");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        list_el.appendChild(task_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        task_el.appendChild(task_content_el);

        const task_actions_element = document.createElement("div");
        task_actions_element.classList.add("actions");

        /* Create edit Button */
        const task_edit_element = document.createElement("button");
        task_edit_element.classList.add("edit");
        task_edit_element.innerHTML = "Edit";

        /*Create Delete button */
        const task_delete_element = document.createElement("button");
        task_delete_element.classList.add("delete");
        task_delete_element.innerHTML = "Delete";

        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        task_el.appendChild(task_actions_element);
        list_el.appendChild(task_el);

        input.value = "";

        task_edit_element.addEventListener('click', () => {
            if (task_edit_element.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_element.innerHTML = "Save";
            }
            else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_element.innerText = "Edit";
            }
        });

        task_delete_element.addEventListener('click', () => {
            list_el.removeChild(task_el);
        })

    })
})