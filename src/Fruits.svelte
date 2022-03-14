<script>
    // Props
    // export는 부모-자식 간에 props를 주고 받는 통로라고 생각하면 덜 헷갈림
    export let fruits;
    export let reverse;
    export let slice;

    let computedFruits = [];
    let name = '';

    if (reverse) {
        computedFruits = [...fruits].reverse();
        name = 'reverse';
    } else if (slice){
        computedFruits = fruits.slice(...slice.split(","));
        name = `slice ${slice}`;
    } else {
        computedFruits = fruits;
    }
</script>

<h2>Fruits {name}</h2>
<ul>
    {#each computedFruits as fruit}
        <li>{fruit}</li>
    {/each}
</ul>