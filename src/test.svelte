<script>
    let name = 'world';  // 변수를 선언하면 html 내에서 사용할 수 있음 => 선언적 렌더링
    let age = 85;

    // 변수의 값이 변하면 화면도 같이 변함 => 반응성
    // 함수를 선언한다고 해서 값이 변하는건 아니고
    // 함수가 실행되어야 값이 변하기 때문에 반응성을 주려면 함수가 실행되어야 함
    function assign() {
        name = 'yujuck';
        age = 28;
    }
</script>

<h1>hello {name}!</h1>
<h2 class={age < 85 ? 'active': ''}>{age}</h2>  <!-- class에도 표현식 넣을 수 있음-->
<img src="" alt={name}>
<input type="text" bind:value={name}>
<button on:click={assign}>Assign</button>


<!-- style은 이 파일 내에서만 유효함-->
<style>
h1 {
    color: red;
}
.active {
    color: blue;
}
</style>