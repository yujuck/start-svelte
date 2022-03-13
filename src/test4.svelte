<script>
    let text = '';
</script>

<h1>
    {text}
</h1>

<!--양방향 데이터 바인딩-->
<input type="text" 
        value={text}
        on:input={e => {text = e.target.value}} />

<!-- bind:value로 위의 코드와 동일하게 작성 가능-->
<input type="text"
        bind:value={text} />

<button on:click={() => {text= 'yujuck'}}>click</button>