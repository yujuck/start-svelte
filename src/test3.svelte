<script>
    // import {onMount} from 'svelte'; // onMount: 컴포넌트가 연결(mount)되면 콜백을 실행
    let name = 'world';
    let isRed = false;

    // onMount(() => {
    //     const box = document.querySelector('.box');
    //     box.addEventListener('click', ()=> {isRed = !isRed});
    // });
    
</script>

<h1>Hello {name}!</h1>
<div class="box" 
    style="background-color: {isRed ? 'red' : 'orange'};"
    on:click={isRed = !isRed}>Box!</div> <!-- 주석한 내용이 on:click으로 작성 가능 (이벤트핸들링)-->

<style>
    .box {
        width: 300px;
        height: 150px;
        background-color: orange;
    }
</style>