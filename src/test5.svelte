<script>
    import Fruits from './Fruits.svelte';

    let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango'];
</script>

<!--props로 fruits 전달-->
<Fruits fruits={fruits} />
<!-- <Fruits {fruits} />  속성과 값의 이름이 같으면 생략 가능-->
<Fruits {fruits} reverse={true} />
<!-- <Fruits {fruits} reverse /> 속성 이름을 작성하는 것 자체가 속성을 전달하는 것과 같으므로 위의 줄과 같은 코드가 됨-->
<Fruits {fruits} slice="-2" />
<Fruits {fruits} slice="0, 3" />

<!--
<h2>Fruits</h2>
<ul>
    {#each fruits as fruit}
        <li>{fruit}</li>
    {/each}
</ul>

<h2>Fruits Reverse</h2>
<ul>
    ## reverse는 원본을 바꿔버리기 때문에 전개 연산자로 fruits 풀어서 사용
    {#each [...fruits].reverse() as fruit}
        <li>{fruit}</li>
    {/each}
</ul>

<h2>Fruits slice -2</h2>
<ul>
    {#each fruits.slice(-2) as fruit}
        <li>{fruit}</li>
    {/each}
</ul>
-->
<!--fruit를 사용하는 구조가 반복됨 => 컴포넌트화 시킬 수 있음-->
