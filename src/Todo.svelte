<script>

    export let todos;  // 스토어 객체
    export let todo;
    

    let isEdit = false;
    let title = '';

    function onEdit() {
        isEdit = true;
        title = todo.title;
    }

    function offEdit() {
        isEdit = false;
    }

    function deleteTodo() {
        $todos = $todos.filter(t => t.id !== todo.id);
    }

    function updateTodo() {
        todo.title = title;
        offEdit();
    }
</script>

{#if isEdit}
    <div>
        <input type="text" 
                bind:value={title}
                on:keydown={(e) => {e.key === 'Enter' && updateTodo()}}/>
        <button on:click={updateTodo}>OK</button>
        <button on:click={offEdit}>Cancel</button>
    </div>
{:else}
    <div>
        {todo.title}
        <button on:click={onEdit}>Edit</button>
        <button on:click={deleteTodo}>Delete</button>
    </div>
{/if}

