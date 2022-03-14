<script>
    import Child from './Child.svelte';

    // test6에서 Child에 넘기기 위해
    // Parent 파일에서는 다루지 않는 데이터를 받아서 넘김
    // => 스토어(Store) 활용해서 Parent를 거치지 않고 바로 Child로 넘길 수 있음
    // export let name;
</script>

<div>
    Parent
</div>
<!-- <Child {name}/> -->