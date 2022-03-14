<script>
    import { storeName } from './store';
    import Parent from './Parent.svelte';

    // let name = 'world';

    console.log($storeName);  // $를 붙이면 저장되어있는 값을 리턴함
    // set, update, subscribe 메서드를 사용해 구현하는 대신,
    // 간단하게 $ 표시를 사용하는 것을 Auto-subscription(자동 구독)이라고 함
    // svelte에서는 $가 예약어라서 변수명에 사용하면 안됨
    $storeName = 'yujuck';
</script>

<Parent />
<!--
<Parent {name}/>
-->