<script>
    let name = 'world';
    let toggle = false;

    let fruits = ['apple', 'banana', 'cherry', 'orange', 'mango'];

    function deleteFruit() {
        fruits = fruits.slice(1);
    }
</script>

<button on:click={() => {toggle = !toggle}}>Toggle</button>

<!-- if 문으로 조건별 렌더링 가능 -->
<!-- 시작은 #, 중간에는 :, 마무리는 / -->
{#if toggle}
    <h1>Hello {name}!</h1>
{:else}
    <div>No name!</div>
{/if}

<ul>
    {#each fruits as fruit}  <!-- 배열 as 변수 -->
        <li>{fruit}</li>
    {/each}
</ul>
<button on:click={deleteFruit}>Eat it!</button>
