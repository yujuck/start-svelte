<script>
	import Todo from './Todo.svelte';
	import { writable } from 'svelte/store';

    let title = '';
    let todos = writable([]);
    let id = 0;

    function createTodo() {
		if(!title.trim()) {
			title = '';
			return ;
		}
        $todos.push({ id, title });
		$todos = $todos;  // todos에 할당을 해야 반응성이 생김. push 하는 것만으로는 반응성이 안생김
        title = '';
        id++;
    }
</script>

<input type="text" 
		bind:value={title} 
		on:keydown={(e)=> {e.key === 'Enter' && createTodo()}} />
<button on:click={createTodo}>
    Create Todo
</button>

{#each $todos as todo}
	<Todo todos={todos} {todo} /> <!-- todos를 넘길 때 $를 쓰면 단순히 배열을 넘기는 것과 같아지므로 writable 객체를 넘기기 위해 $를 쓰면 안됨-->
{/each}

<!--
	<Todo bind:todos={todos} {todo} />

	이번에는 store 개념을 사용해서 만들지만
	위처럼 todos를 양방향 데이터 바인딩 하는 방법으로
	Todo.svelte에서 todos에 데이터를 할당해도 반응성을 갖도록 만들 수 있음
-->